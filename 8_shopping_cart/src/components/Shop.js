import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Product from "./Product";
import Cart from './Cart';

const Shop = () => {
  return (
    <section className="container">
      <div className="catalog">
        <Link to="/shop/sense">Sense</Link>
        <Link to="/shop/nonsense">Nonsense</Link>
        <Link to="/shop/cart">Cart</Link>
      </div>
        <Switch>
          <Route exact path="/shop/sense">
            <Product catalog="sense" />
          </Route>
          <Route exact path="/shop/nonsense">
            <Product catalog="nonsense" />
          </Route>
          <Route exact path="/shop/cart">
            <Cart />
          </Route>
        </Switch>
    </section>
  )
}

export default Shop;