import React from 'react'
import {Container } from 'semantic-ui-react'
import LoginForm from '../../components/Login/LoginForm/LoginForm'
import RegisterForm from '../../components/Login/RegisterForm/RegisterForm'
import instaclone from "../../../public/images/Logo.jpg"
import "./Auth.scss"

export default function Auth() {
  const showLogin = true

  function CustomImage({ src, alt, title, ...props }) {
    return <img src={src} alt={alt} title={title} {...props} />;
  }
  return (
    <Container fluid className='auth'>
            <CustomImage src={instaclone} alt="Logo de Instaclone" title="Título predeterminado" />
            <div className='container-form'>
                {
                    showLogin ? (<LoginForm/>) : <RegisterForm/>
                }
            </div>

            <div className='change-form'>
                <p>
                    {
                        showLogin ? (<>¿No tienes cuenta?<span onClick={() => setShowLogin(!showLogin)}> Registrate</span></>) 
                        : (<>¿Ya tienes cuenta?<span onClick={() => setShowLogin(!showLogin)}> Inicia sesión</span></>)
                    }
                </p>
            </div>
        </Container>
  )
}
