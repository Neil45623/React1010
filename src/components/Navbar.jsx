import React from 'react';
import {  Link } from "react-router-dom";
import styled from "styled-components";

const linkStyle = {
    margin: "10px",
    cursor: "pointer",
    color: 'white',
    background: "black"

  };

  const linkStyle2 = {
    margin: "10px",
    cursor: "pointer",
    color: 'white',
    background: "black",
    fontsize: "15px"
  };

const Navbar= () =>{
  return (
  <div>
    
      <Link to="/" style={linkStyle}>Login</Link>
    
    
      <Link to="/Dashboard"style={linkStyle2}>Dashboard</Link>
    
  </div>
  );
}
export default Navbar;