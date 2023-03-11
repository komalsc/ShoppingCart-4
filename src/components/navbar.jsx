import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        {/* <Link to="/"> Shop </Link> */}
        <Link to="/About"> About</Link>
       
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
        <Link to="/cart">

<ShoppingCart size={40} />
</Link>
      </div>
    </nav>
  );
};
