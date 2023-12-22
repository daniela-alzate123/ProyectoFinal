import React, { useEffect, useState } from 'react';
import './Principal.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Polygon, TileLayer } from 'react-leaflet';
import { getPoligonos } from '../../services/data';

import { useDispatch, useSelector } from 'react-redux';
import userImage from '../../images/user.png'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { signOff } from '../../store/authThunk';

const Principal = () => {
  
  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.userLogged); 


  const [polygons, setPolygons] = useState([]);

  useEffect(() => {
    polygonsFigure();
  }, []);

  

  const setLogoutUser = () => {
    dispatch(signOff())
  }

  const  polygonsFigure= async () => {
    try {
      const result = await getPoligonos();
      setPolygons(result.data.features);
      console.log(result.data.features)
      console.log(result)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="principal">
      <section className="left-section">
      <img src={user?.photoURL || userImage} alt="Usuario" className="left-image" />
      <div className="user-info">
          {/* Muestra la información del usuario */}
          {user && (
            <>
              <p>{`Nombre Completo: ${user.name}`}</p>
              
              <p>{`Correo Electrónico: ${user.email}`}</p>
              <p>{`Edad: ${user.Age}`}</p>
            </>
          )}
        </div>
        <div className="spacer"></div>
        <div className="menu-option">menú</div>
        <div className="spacer"></div>
        
        <button className="btn btn-danger custom-btn" onClick={setLogoutUser}>Cerrar Sesión</button>
      </section>
      <section className="right-section">
        <div className="map-title">Distribución político - administrativa de Medellín</div>
        <div className="map-container">
          <MapContainer id="mapid" center={{ lat:  6.2442 , lng: -75.5812 }} zoom={11}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {polygons.map((miPoligono, index) => (
              miPoligono.type === 'Polygon' && miPoligono.coordinates ? (
                miPoligono.coordinates.map((anillo, anilloIndex) => (
                  <Polygon
                    key={`${index}-${anilloIndex}`}
                    positions={anillo.map(([lng, lat]) => [lat, lng])}
                    color="red"
                  />
                ))
              ) : null
            ))}
          </MapContainer>
        </div>
      </section>
    </div>
  );
};

export default Principal;
