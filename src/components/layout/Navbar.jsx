import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div className="Navbar">
      <h1>Navbar</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Register</Link> 
        <Link to="/">Contacts</Link>
      </nav>
    </div>
  );
};

export default Navbar;
