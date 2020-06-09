import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './NavbarComp.module.css';

const logo = require('./LogoLookUp.png');

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link to="/">
          <NavbarBrand href="/">
            <img className={styles.logo} src={logo} alt="logo" />
          </NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/product">
                <NavLink>Produits</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about">
                <NavLink>A propos</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/services">
                <NavLink>Services</NavLink>
              </Link>
            </NavItem>
          </Nav>
          <NavLink>
            <Link to="/Contact">Contact</Link>
          </NavLink>
          <NavLink href="www.facebook.com">Facebook</NavLink>
          <NavLink href="www.linkedin.com">LinkedIn</NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
