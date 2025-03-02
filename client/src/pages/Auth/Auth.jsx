import React,{useState} from "react";
import { Container } from "semantic-ui-react";
import LoginForm from "../../components/Login/LoginForm/LoginForm";
import RegisterForm from "../../components/Login/RegisterForm/RegisterForm";
import Logo from "../../components/Logo/Logo";
import "./Auth.scss";

export default function Auth() {
  const [showLogin ,setShowLogin] = useState(true)


  return (
    <Container className="auth">

      <Container className="container-logos">
        <Logo />
      </Container>  

      <Container className="container-form">
        <div>{showLogin ? <LoginForm /> : <RegisterForm />}</div>
      </Container>

      <Container className="change-form">
        <div>
          <p>
            {showLogin ? (
              <>
                ¿No tienes cuenta?
                <span onClick={() => setShowLogin(!showLogin)}>
                  {" "}
                  Registrate
                </span>
              </>
            ) : (
              <>
                ¿Ya tienes cuenta?
                <span onClick={() => setShowLogin(!showLogin)}>
                  {" "}
                  Inicia sesión
                </span>
              </>
            )}
          </p>
        </div>
      </Container>
    </Container>
  );
}
