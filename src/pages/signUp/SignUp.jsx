import React from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../store/authThunk';
import md5 from 'md5';

const SignUp = () => {


  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const newUser = {
      name: data.name,
      Age: data.Age,
      email: data.email,
      password: data.password,
      photoURL: `https://www.gravatar.com/avatar/${md5(newUser.uid)}?d=identicon`,

    };
    
    dispatch(createUser(newUser));
    navigate('/')


  }
  return (
    <main className='signUp'>
      <div className='signUp_contenido'>
        <h3>Registro</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId='formName'>
            <Form.Label>Nombre Completo</Form.Label>
            <input type='text' className='form-control' placeholder='name' {...register("name", { required: true })} />
          </Form.Group>

          <Form.Group controlId='formAge'>
            <Form.Label>Edad</Form.Label>
            <input type='number' className='form-control' placeholder='edad' {...register("Age", { required: true })} />
          </Form.Group>

          <Form.Group controlId='formEmail' className='form-group-email'>
            <Form.Label>Email</Form.Label>
            <input type='text' className='form-control' placeholder='Ingresa tu email' {...register("email", { required: true })} />
          </Form.Group>

          <Form.Group controlId='formPassword' className='form-group-Password'>
            <Form.Label>Contraseña</Form.Label>
            <input type='password' className='form-control' placeholder='Ingresa tu contraseña'{...register("password", { required: true })} />
          </Form.Group>

          <div className='button-container  '>

            <Button variant='success' type='submit' className='btn-register'>
              Registrarse
            </Button>
          </div>
        </Form>
      </div>
    </main>
  )
}

export default SignUp
