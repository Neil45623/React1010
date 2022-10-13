
import React from 'react';
import {  Link } from "react-router-dom";
import style from "./Navbar.module.css"

const linkStyle = {
    margin: "10px",
    cursor: "pointer",
    color: 'white',
    background: "black",
    fontSize: "15px",
    padding: "10px 20px",
    border: "1px solid blue",
  display: "inline-block"
  };


const Navbar= () =>{
  return (
  <div className={style.center}>
    
      <Link to="/" style={linkStyle}>Login</Link>
    
    
      <Link to="/Dashboard"style={linkStyle}>Dashboard</Link>

      <Link to="/Chien"style={linkStyle}>Chien</Link>
    
  </div>
  );
}
export default Navbar;