import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Container,
} from 'reactstrap';
import PropTypes from 'prop-types';
import ImageSmall from './img/support-300w.png';
import style from './ImageProduit.module.css';

function ImageProduit({ buttonLabel, picture, description, name }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const reduction = '20%';
  return (
    <Container>
      <img src={picture} alt={name} width="50%" />
      <div>
        <Button color="danger" onClick={toggle}>
          {buttonLabel}
        </Button>
        <Modal isOpen={modal} toggle={toggle} className="modal-lg">
          <ModalHeader toggle={toggle}>DEVIS</ModalHeader>
          <ModalBody>
            <div>
              <img
                className={style.imgModal}
                src={ImageSmall}
                alt="une description"
              />
              <p>{description}</p>
            </div>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Nombres d&apos;articles:</InputGroupText>
                <Input
                  placeholder="Amount"
                  min={0}
                  max={100}
                  type="number"
                  step="1"
                />
              </InputGroupAddon>
            </InputGroup>
            <p>Réduction: {reduction}</p>
            <Form>
              <FormGroup>
                <Label for="name">Nom</Label>
                <Input type="text" name="nom" id="name" placeholder="Mme/Mr" />
              </FormGroup>
              <FormGroup>
                <Label for="company">Entreprise</Label>
                <Input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="entreprise"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="Email"
                  placeholder="@email"
                />
              </FormGroup>

              <FormGroup>
                <Label for="phone">Téléphone</Label>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="06 XX XX XX XX"
                />
              </FormGroup>

              <FormGroup>
                <Label for="message">Message</Label>
                <Input type="textarea" name="message" id="message" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button block color="success" onClick={toggle}>
              Validez votre devis
            </Button>
            <Button block color="danger" onClick={toggle}>
              Annuler
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </Container>
  );
}

ImageProduit.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ImageProduit;
