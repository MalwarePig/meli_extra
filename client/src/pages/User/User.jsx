import React from "react";
import { Container } from "semantic-ui-react";

import User from "../../components/User/Profile";
import Present from "../../components/User/Present";
import Logo from '../../components/Logo/Logo'
import "./User.scss";

export default function Auth() {
  const showLogin = false;

  function CustomImage({ src, alt, title, ...props }) {
    return <img src={src} alt={alt} title={title} {...props} />;
  }
  return (
    <Container className="auth">
      <div className="container-logo">
        <Logo/>
      </div>
      <div className="container-form">
        <User />
      </div>

      <div className="change-form">
        <p>
          <Present />
        </p>
      </div>
    </Container>
  );
}
