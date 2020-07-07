import React from 'react';
import { Container } from 'reactstrap';
import LogoP from './Logo-lookup-oiseau.png';
import Logo from './LookU.png';
import styles from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <Container>
      <div className={styles.wrapper}>
        <img
          className={styles.logo}
          src={Logo}
          style={{ width: '30%' }}
          alt=""
        />
        <img
          className={styles.rotate}
          src={LogoP}
          style={{ width: '14%' }}
          alt=""
        />
      </div>
    </Container>
  );
}
