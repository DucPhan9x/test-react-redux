import React from "react";
import { Modal, Button } from "react-bootstrap";
import classes from "../styles/App.module.css";

const Contact = ({ showContact, contact, handleCloseContact }) => {
  return (
    <Modal
      show={showContact}
      onHide={handleCloseContact}
      size="lg"
      backdrop="static"
    >
      <Modal.Header>
        <Modal.Title>Contact Detail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p>
            <strong>Id:</strong> {contact.id}
          </p>
          <p>
            <strong>First name:</strong> {contact.first_name}
          </p>

          <p>
            <strong>Last name:</strong> {contact.last_name}
          </p>

          <p>
            <strong>Email:</strong> {contact.email}
          </p>

          <p>
            <strong>Phone number:</strong> {contact.phone_number}
          </p>
          <p>
            <strong>Country Id:</strong> {contact.country_Id}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justity-content-between">
        <Button
          variant="secondary"
          onClick={handleCloseContact}
          className={classes.buttonC}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Contact;
