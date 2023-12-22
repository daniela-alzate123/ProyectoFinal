import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginWithEmailAndPassword } from '../../store/authThunk';

const Login = () => {


  const {register, handleSubmit} = useForm()
  const dispactch = useDispatch()

  const onSubmit = (data) =>{
    dispactch(loginWithEmailAndPassword(data))
  }

  return (
    <main className='login'>
      <div className='login_contenido'>
        <h3>Iniciar sesión</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId='formGmail'>
            <Form.Label>Gmail</Form.Label>
            <input type='text' className='form-control' placeholder='daniela@example.com' {...register("email", { required: true })}/>
          </Form.Group>

          <Form.Group controlId='formPassword' className='form-group-password'>
            <Form.Label>Contraseña</Form.Label>
            <input type='password' className='form-control' placeholder='Ingresa tu contraseña' {...register("password", { required: true })}/>
          </Form.Group>

          <div className='button-container'>
            <Button variant='success' type='submit' className='btn-login'>
              Iniciar Sesión
            </Button>
            <Link to={'/signUp'} className='link-registrarse'>Registrarse</Link>
          </div>
        </Form>
      </div>
    </main>
  );
};

export default Login;
