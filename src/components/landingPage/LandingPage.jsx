import React from 'react';
import LogoP from './Logo-lookup-oiseau.png';
import Logo from '../navbar/LookUp.png';
import styles from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <div>
      <div>
        <img
          className={styles.div}
          src={LogoP}
          style={{ width: '10%' }}
          alt=""
        />
      </div>
      <div>
        <img src={Logo} style={{ width: '30%' }} alt="" />
      </div>
    </div>
  );
}
