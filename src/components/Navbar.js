import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

function Navbar() {
  return (
    <div>
      <nav  style={{backgroundColor:"white" ,display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <a class='navbar-brand' href='#'>
          <img
            src={require("../images/logo.png")}
            alt=''
            style={{ objectFit: "contain", height: "50px", margin: "10px" }}
          />
        </a>
        <div style={{marginRight:"30px"}}>
        <Link to='/'style={{marginRight:"30px", textDecoration:"none", color:"black"}}>EarthDay</Link>
        <Link to='/Pokemon' style={{textDecoration:"none", color:"black"}}>Pokemon</Link>
        </div>
     
      </nav>
    </div>
  );
}

export default Navbar;
