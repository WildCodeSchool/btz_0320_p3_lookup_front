import React from 'react';
import { Row, Col, Container } from 'reactstrap';

import guillaume from './img/guillaume.jpeg';
import bertrand from './img/bertrand.png';
import justine from './img/justine.png';
import UserCard from './UserCard';
import style from './Avis.module.css';

const avis = [
  {
    id: 1,
    name: 'Bertrand L.',
    photo: bertrand,
    position: 'Chargé de Communication',
    compagny: 'GROUPE RENAULT',
    text:
      ' Un support créé et conçu avec des valeurs qui me correspondent. Il m’a aidé au quotidien à trouver la bonne posture dans mon environnement de travail. ',
  },
  {
    id: 2,
    name: 'Justine C.',
    photo: justine,
    position: 'Responsable Service Client',
    compagny: 'HOPAAL',
    text:
      ' Un support dont je me sers au quotidien. Grâce à ça, je me tiens mieux et je ne peux plus m’en passer. En plus, soutenir une démarche locale me ravit.',
  },
  {
    id: 3,
    name: 'Guillaume M.',
    photo: guillaume,
    position: 'Juriste',
    compagny: 'EXCO FIDUCIAIRE',
    text:
      "Grâce à son ergonomie et sa légèreté, je le transporte facilement et peux l'utiliser tant au bureau qu'à mon domicile. Et ainsi adopter la posture recommandée où que je sois. ",
  },
];

function Avis() {
  return (
    <Container className={style.container}>
      <Row>
        <Col className={style.quote1}>&quot;</Col>
        {avis.map((user) => (
          <Col xs={{ size: 3 }}>
            <UserCard
              photo={user.photo}
              name={user.name}
              position={user.position}
              text={user.text}
            />
          </Col>
        ))}
        <Col className={style.quote2}>&quot;</Col>
      </Row>
    </Container>
  );
}

export default Avis;
