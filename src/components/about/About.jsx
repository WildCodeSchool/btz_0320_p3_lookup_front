/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './About.module.css';

const antonin = require('./Antonin.jpg');

export default function About() {
  return (
    <div className={styles.center}>
      <img className={styles.img_about} src={antonin} alt="A propos" />
      <h3 className={styles.title_about}>Humain, Nature & Technologie </h3>
      <p>
        Comme vous, chez LookUp, nous observons le monde de l’entreprise se
        digitaliser et nous sommes convaincus des ces bienfaits. Pour autant
        nous sommes forcé de constater l’impact de nos nouveaux usages de la
        technologie sur notre santé physique, mentale et sociale. Arrive ensuite
        l’impact encore sur notre environnement. C’est pourquoi nous proposons
        des solutions simples et accessibles qui améliorent le quotidien des
        travailleurs. Nous souhaitons rétablir le lien et l’équilibre entre
        l’Humain, la Nature et la Technologie afin que nous utilisions
        consciemment ces nouveaux outils en limitant au maximum notre impact sur
        la planète.
      </p>
    </div>
  );
}
