import React from 'react'
import {Container,Image } from 'semantic-ui-react'
import LoginForm from '../../components/Login/LoginForm/LoginForm'
import instaclone from "../../../public/images/logo.png"
import "./Auth.scss"

export default function Auth() {
  const showLogin = true
  return (
    <Container fluid className='auth'>
            <Image src={instaclone} alt="Logo de Instaclone" title="Título predeterminado"/>
            <div className='container-form'>
                {
                    showLogin ? (<LoginForm/>) : <RegisterForm setShowLogin ={setShowLogin}/>
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
