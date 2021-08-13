import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';

const Routes = () => {

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Shop" component={Shop} />
        <Route exact path="/About" component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;