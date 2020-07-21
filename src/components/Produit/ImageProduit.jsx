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
  Spinner,
} from 'reactstrap';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import style from './ImageProduit.module.css';

function ImageProduit({ buttonLabel, picture, description, name }) {
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState('');
  const [clients, setClients] = useState({});
  const [clientsName, setClientsName] = useState({});
  const [quantity, setQuantity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { register } = useForm();

  const toggle = () => setModal(!modal);

  const notifySuccess = () => {
    toast.success('Votre demande a été prise en compte', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const notifyError = () => {
    toast.error('Erreur Notification !', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const postClient = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await Axios.post(
        `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/clients`,
        clients
      );
      await Axios.post(
        `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/sendMail`,
        {
          html: `<p><b>Entreprise :</b> ${clients.companyName},</p>
          <p><b>Nom :</b> ${clientsName.lastname},</p>
          <p><b>Prénom :</b> ${clientsName.firstname},</p>
        <p><b>Numéro de siret :</b> ${clients.siret},</p>
        <p><b>Adresse :</b> ${clients.streetNumber} ${clients.streetName} ${clients.postalCode} ${clients.city},</p>
        <p><b>Email :</b> ${clients.email},</p>
        <p><b>Telephone :</b> ${clients.phone}.</p>
        <p><b>Quantités :</b> ${quantity},</p>
        <p>Voici le message du client :</p>
        <p>${message}</p>`,
          subject: `Demande de devis sur LookUp.fr de la part de ${clients.companyName}`,
          emailTo: 'doudou6500@gmail.com', // Email antonin
        }
      );
      notifySuccess();
      toggle();
    } catch (err) {
      notifyError();
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Spinner color="primary" />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container>
      <img src={picture} alt={name} width="70%" />
      <div>
        <Button
          color="danger"
          onClick={toggle}
          style={{ 'margin-top': '20px' }}
        >
          {buttonLabel}
        </Button>
        <Modal isOpen={modal} toggle={toggle} className="modal-lg">
          <Form onSubmit={postClient}>
            <ModalHeader toggle={toggle}>DEVIS</ModalHeader>

            <ModalBody>
              <div>
                <img
                  className={style.imgModal}
                  src={picture}
                  alt="une description"
                  width="50%"
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
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </InputGroupAddon>
              </InputGroup>

              <FormGroup>
                <Label for="companyName">Entreprise</Label>
                <Input
                  type="text"
                  name="companyName"
                  ref={register({ required: true })}
                  onChange={(e) =>
                    setClients({
                      ...clients,
                      companyName: e.target.value,
                    })
                  }
                  placeholder="Entreprise"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="companyName">Nom</Label>
                <Input
                  type="text"
                  name="lastname"
                  ref={register({ required: true })}
                  onChange={(e) =>
                    setClientsName({
                      ...clientsName,
                      lastname: e.target.value,
                    })
                  }
                  placeholder="Nom"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="companyName">Prénom</Label>
                <Input
                  type="text"
                  name="firstname"
                  ref={register({ required: true })}
                  onChange={(e) =>
                    setClientsName({
                      ...clientsName,
                      firstname: e.target.value,
                    })
                  }
                  placeholder="Prenom"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="siret">Numéro Siret</Label>
                <Input
                  type="text"
                  name="siret"
                  ref={register({ required: true })}
                  onChange={(e) =>
                    setClients({
                      ...clients,
                      siret: e.target.value,
                    })
                  }
                  placeholder="Numéro Siret"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="streetNumber">Numero de rue</Label>
                <Input
                  type="number"
                  name="streetNumber"
                  ref={register({ required: true })}
                  onChange={(e) =>
                    setClients({
                      ...clients,
                      streetNumber: e.target.value,
                    })
                  }
                  placeholder="Numero de rue"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="streetName">Nom de rue</Label>
                <Input
                  type="text"
                  name="streetName"
                  ref={register({ required: true })}
                  onChange={(e) =>
                    setClients({
                      ...clients,
                      streetName: e.target.value,
                    })
                  }
                  placeholder="Nom de rue"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="postalCode">Code Postal</Label>
                <Input
                  type="number"
                  name="postalCode"
                  ref={register({ required: true })}
                  onChange={(e) =>
                    setClients({
                      ...clients,
                      postalCode: e.target.value,
                    })
                  }
                  placeholder="Code Postal"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="city">Ville</Label>
                <Input
                  type="text"
                  name="city"
                  ref={register({ required: true })}
                  onChange={(e) =>
                    setClients({
                      ...clients,
                      city: e.target.value,
                    })
                  }
                  placeholder="Ville"
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="text"
                  name="email"
                  ref={register({ required: true })}
                  onChange={(e) =>
                    setClients({
                      ...clients,
                      email: e.target.value,
                    })
                  }
                  placeholder="Email"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Téléphone</Label>
                <Input
                  type="text"
                  name="phone"
                  ref={register({ required: true })}
                  onChange={(e) =>
                    setClients({
                      ...clients,
                      phone: e.target.value,
                    })
                  }
                  placeholder="06 XX XX XX XX"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="message">Message</Label>
                <Input
                  type="textarea"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Votre message"
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button block color="success" type="submit">
                Validez votre devis
              </Button>
              <Button block color="danger" onClick={toggle}>
                Annuler
              </Button>
            </ModalFooter>
          </Form>
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
