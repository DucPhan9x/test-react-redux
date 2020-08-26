import React from "react";
import { Modal, Button, Form, Check } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "../styles/App.module.css";

const ModalContacts = ({ title, children }) => {
  return (
    <Modal
      show={true}
      size="lg"
      backdrop="static"
      onHide={null}
      centered
      animation={false}
    >
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
        <Form>
          <Form.Control type="text" placeholder="Search contacts" value="" />
        </Form>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <Form.Check type="checkbox" label="Only even" />
        {/* {isLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )} */}
        <div>
          <Link to="/all-contacts">
            <Button variant="primary" className={classes.buttonA}>
              All Contacts
            </Button>
          </Link>
          <Link to="/us-contacts">
            <Button variant="primary" className={classes.buttonB}>
              US Contacts
            </Button>
          </Link>
          <Link to="/">
            <Button variant="secondary" className={classes.buttonC}>
              Close
            </Button>
          </Link>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalContacts;
