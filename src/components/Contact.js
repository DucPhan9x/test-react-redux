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
      <Modal.Body>Contact detailllll</Modal.Body>
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
