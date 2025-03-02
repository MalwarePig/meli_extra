import React from "react";
import logoMeli from "../../../public/images/Logo.jpg";
import "./Logo.scss";
import { Container } from "semantic-ui-react";

export default function Logo({ src, alt, title, ...props }) {
  return (
    <div className="container-logo">
      <img src={logoMeli} alt={alt} title={title} {...props} />
    </div>
  );
}
