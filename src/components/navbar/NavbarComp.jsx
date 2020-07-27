import React, { useState, useEffect } from 'react';
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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Spinner,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

import styles from './NavbarComp.module.css';
import logo from './LookUp.png';
import facebook from './facebook.png';
import linkedin from './linkedin.png';

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productDataInfo, setProductDataInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const toggle = () => setIsOpen(!isOpen);

  const getDataProduct = async () => {
    try {
      const res = await Axios.get(
        'https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/products_info'
      );
      setProductDataInfo(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataProduct();
  }, []);

  if (isLoading) {
    return <Spinner color="primary" />;
  }

  if (error) {
    return <p>{error}</p>;
  }

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
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Produits
                  </DropdownToggle>
                  <DropdownMenu right>
                    {productDataInfo.map((product) => (
                      <>
                        <Link to={`/product/${product.ProductUuid}`}>
                          <DropdownItem>
                            {ReactHtmlParser(product.title)}
                          </DropdownItem>
                        </Link>
                      </>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown>
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
