import React, { useState } from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import styles from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className={styles.Login}>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <Label className={styles.size}>Connexion au backoffice</Label>
          <Input
            className={styles.input}
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <Input
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Mot de passe"
          />
        </FormGroup>
        <Button
          className={styles.submit}
          block
          bsSize="large"
          disabled={!validateForm()}
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
