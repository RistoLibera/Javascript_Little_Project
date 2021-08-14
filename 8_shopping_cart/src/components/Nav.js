import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <section className="navbar">
      <h1>What a Shop !</h1>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/about">About</Link>
    </section>
  )
}

export default Nav;