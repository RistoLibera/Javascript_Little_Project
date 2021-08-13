import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <section className="navbar">
      <h1>What a Shop !</h1>
      <Link to="/">Home</Link>
      <Link to="/Shop">Shop</Link>
      <Link to="/About">About</Link>
    </section>
  )
}

export default Nav;