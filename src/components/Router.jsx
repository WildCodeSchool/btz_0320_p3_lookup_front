import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Produits from './Produits';
import About from './about/About';
import MyNavbar from './navbar/NavbarComp';
import Services from './Services';
import Contact from './Contact';
import MyFooter from './footer/MyFooter';

export default function App() {
  return (
    <Router>
      <MyNavbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/product" component={Produits} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
      </Switch>
      <MyFooter />
    </Router>
  );
}
