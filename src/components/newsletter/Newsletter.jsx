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
        <Row>
          <Col>
            <p>S&apos;inscire à la newsletter</p>
          </Col>
          <Col>
            <Input
              type="text"
              value={input}
              placeholder="email"
              onChange={(e) => setInput(e.target.value)}
            />
          </Col>
          <Col>
            <Button type="submit" className={styles.newsButton}>
              Envoyer
            </Button>
          </Col>
        </Row>
        <Row>
          {emails.map((email) => (
            <p>{email}</p>
          ))}
          ;
        </Row>
      </Form>
    </>
  );
};

export default Newsletter;
