import React from "react";
import Auth from "./pages/Auth";
import User from "./pages/User";
 import Navigation from "./routes/navigation"; 

export default function App() {
  const login = false;
  return <div className="app-container"> 
  {login ? <Auth /> : <Navigation/>}
  </div>;
}
