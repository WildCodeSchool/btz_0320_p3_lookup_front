import React from 'react';
import { Row, Container } from 'reactstrap';

import Press from './Press';

const press = [
  {
    image:
      'https://upload.wikimedia.org/wikipedia/fr/thumb/9/98/France_Bleu_logo_2015.svg/1200px-France_Bleu_logo_2015.svg.png',
    texte: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  },
  {
    image:
      'https://www.iae-france.fr/wp-content/uploads/2018/12/20181206-LEtudiant.png',
    texte: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  },
  {
    image:
      'https://www.offremedia.com/sites/default/files/vignette/article/nl1608-logo-capital.png',
    texte: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Europe_1_logo_%282010%29.svg/1280px-Europe_1_logo_%282010%29.svg.png',
    texte: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  },
];

export default function PressRelation() {
  return (
    <Container fluid="lg" className="mt-5">
      <Row>
        {press.map((relation) => {
          return <Press image={relation.image} texte={relation.texte} />;
        })}
      </Row>
    </Container>
  );
}
