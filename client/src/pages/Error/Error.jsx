import React from "react";
import "./Error.scss";

export default function Auth() {
  const showLogin = false;

  function CustomImage({ src, alt, title, ...props }) {
    return <img src={src} alt={alt} title={title} {...props} />;
  }
  return (
    <>
    <h1>Error</h1>
    </>
  );
}
