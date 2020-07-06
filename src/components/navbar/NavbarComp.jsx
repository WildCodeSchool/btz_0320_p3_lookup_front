import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Col,
  Row,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './NavbarComp.module.css';

const logo = require('./LookUp.png');
const facebook = require('./facebook.png');
const linkedin = require('./linkedin.png');

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Row>
        <Navbar fixed className={styles.Nav} color="light" light expand="md">
          <Col lg="2" md="3">
            <Link to="/">
              <NavbarBrand href="/">
                <img className={styles.logo} src={logo} alt="logo" />
              </NavbarBrand>
            </Link>
          </Col>
          <Col lg="10" md="9">
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
                <Link
                  className={styles.contact}
                  style={{ color: 'inherit' }}
                  to="/Contact"
                >
                  Contact
                </Link>
              </NavLink>

              <NavLink>
                <Link
                  className={styles.login}
                  style={{ color: 'inherit' }}
                  to="/login"
                >
                  Login
                </Link>
              </NavLink>
              <NavLink
                href="https://www.facebook.com/LookUp.FR/"
                target="_blank"
              >
                <img
                  className={styles.facebook}
                  src={facebook}
                  alt="facebook"
                />
              </NavLink>
              <NavLink
                href="https://www.linkedin.com/company/lookup-fr/"
                target="_blank"
              >
                <img
                  className={styles.linkedin}
                  src={linkedin}
                  alt="linkedin"
                />
              </NavLink>
            </Collapse>
          </Col>
        </Navbar>
      </Row>
    </div>
  );
};

export default MyNavbar;
