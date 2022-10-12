import React from 'react';
import {  Link } from "react-router-dom";
import styled from "styled-components";

const linkStyle = {
    margin: "10px",
    cursor: "pointer",
    color: 'white',
    background: "black",
    fontsize: "15px",
    padding: "10px 20px",
    border: "1px solid blue"

  };

  const linkStyle2 = {
    margin: "10px",
    cursor: "pointer",
    color: 'white',
    background: "black",
    fontsize: "15px",
    padding: "10px 20px",
    border: "1px solid blue"
  };

  const linkStyle3 = {
    margin: "10px",
    cursor: "pointer",
    color: 'white',
    background: "black",
    fontsize: "15px",
    padding: "10px 20px",
    border: "1px solid blue"
  };

const Navbar= () =>{
  return (
  <div>
    
      <Link to="/" style={linkStyle}>Login</Link>
    
    
      <Link to="/Dashboard"style={linkStyle2}>Dashboard</Link>

      <Link to="/Chien"style={linkStyle3}>Chien</Link>
    
  </div>
  );
}
export default Navbar;