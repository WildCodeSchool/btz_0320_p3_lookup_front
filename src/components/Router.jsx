import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './about/About';
import MyNavbar from './navbar/NavbarComp';
import Services from './services/Services';
import Contact from './Contact';
import MyFooter from './footer/MyFooter';
import Produits from './Produit/Produits';

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
