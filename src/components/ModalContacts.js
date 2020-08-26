import React from "react";
import { connect } from "react-redux";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "../styles/App.module.css";
import {
  updateSearchKeyword,
  updateEvenFilter,
} from "../actions/filterContactAction";
const mapStateToProps = (state) => ({
  searchKeyword: state.filter.searchKeyword,
  isOnlyEven: state.filter.isOnlyEven,
});

const mapDispatchToProps = (dispatch) => ({
  updateSearch: (value) => dispatch(updateSearchKeyword(value)),
  updateOnlyEvenFilter: (value) => dispatch(updateEvenFilter(value)),
});
const ModalContacts = ({
  title,
  isOpen,
  searchKeyword,
  isOnlyEven,
  isLoading = false,
  updateSearch,
  updateOnlyEvenFilter,
  children,
}) => {
  let timerId = null;
  const onHandleKeydown = (e) => {
    if (e.keyCode === 13) {
      if (e.target.value !== "") {
        if (timerId !== null) clearTimeout(timerId);
        updateSearch(e.target.value);
      }
      e.preventDefault();
    }
  };

  const onHandleChange = (e) => {
    if (timerId != null) clearTimeout(timerId);
    const inputValue = e.target.value;
    timerId = setTimeout(() => {
      updateSearch(inputValue);
    }, 200);
  };

  return (
    <Modal show={isOpen} size="lg" backdrop="static" onHide={null} centered>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
        <Form>
          <Form.Control
            type="text"
            placeholder="Search contacts"
            value={searchKeyword}
            onKeyDown={onHandleKeydown}
            onChange={onHandleChange}
          />
        </Form>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <Form.Check
          type="checkbox"
          label="Only even"
          checked={isOnlyEven}
          onChange={(e) => updateOnlyEvenFilter(e.target.checked)}
        />
        {isLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
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
export default connect(mapStateToProps, mapDispatchToProps)(ModalContacts);
