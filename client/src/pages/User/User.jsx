import React from "react";
import { Container } from "semantic-ui-react";
import User from "../../components/User/User";
import instaclone from "../../../public/images/Logo.jpg";
import "./User.scss";

export default function Auth() {
  const showLogin = true;

  function CustomImage({ src, alt, title, ...props }) {
    return <img src={src} alt={alt} title={title} {...props} />;
  }
  return <Container fluid className="auth">
    <User/>
  </Container>;
}
