import axios from "axios";

const URL = 'https://usc1.contabostorage.com/d069ea98e2df4b0e9e99b1e7b2ca9a58:pruebasceluweb/jsonciudad/medellin.geojson'


export const getPoligonos = async() => {
    try {
        const result = await axios.get(URL);
        return result;
    } catch (error) {
      
        return [];
    }
}