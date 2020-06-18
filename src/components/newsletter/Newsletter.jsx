import React, { useState } from 'react';
import { Form, Button, Input, Col, Row } from 'reactstrap';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  const [input, setInput] = useState('');
  const [emails, setEmails] = useState(['']);

  const addEmail = (newEmail) => {
    const newEmails = [...emails, newEmail];
    setEmails(newEmails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmail();
    setInput('');
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <hr className={styles.hr} />
        <Row className={styles.newsForm}>
          <Col md="12" lg="4">
            <p>S&apos;inscire à la newsletter</p>
          </Col>
          <Col lg="4" md="6" sm="8" xs="10">
            <Input
              type="text"
              value={input}
              placeholder="email"
              onChange={(e) => setInput(e.target.value)}
            />
          </Col>
          <Col lg="4" md="12">
            <Button type="submit" className={styles.newsButton}>
              Envoyer
            </Button>
          </Col>
        </Row>
        <Row>
          {emails.map((email) => (
            <p>{email}</p>
          ))}
        </Row>
      </Form>
    </>
  );
};

export default Newsletter;
