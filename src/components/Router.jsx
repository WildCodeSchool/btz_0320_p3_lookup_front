import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Produits from './Produit/Produits';
import About from './About';
import MyNavbar from './navbar/NavbarComp';
import Services from './Services';
import Contact from './Contact';

export default function App() {
  return (
    <Router>
      <MyNavbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/produits" component={Produits} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}
