import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <div>
      <h1>nav</h1>
      <Link to="/">Home</Link>
      <Link to="/Shop">Shop</Link>
      <Link to="/About">About</Link>
    </div>
  )
}

export default Nav;