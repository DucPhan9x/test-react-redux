import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import classes from "./styles/App.module.css";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import Contacts from "./components/Contacts";
import Contact from "./components/Contact";
import { ALL_COUNTRY, US_COUNTRY } from "./constants/constants";

const App = () => {
  const [showContacts, setShowContacts] = useState(true);
  const [showContactDetail, setShowContactDetail] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSelectedContact = (contact) => {
    setShowContacts(false);
    setSelectedContact(contact);
    setShowContactDetail(true);
  };
  const handleCloseContact = () => {
    setShowContactDetail(false);
    setShowContacts(true);
  };
  return (
    <div className={classes.textCenter}>
      <BrowserRouter>
        <Link to="/all-contacts">
          <Button className={classes.buttonA}>All Contacts</Button>
        </Link>
        <Link to="/us-contacts">
          <Button className={classes.buttonB}>US Contacts</Button>
        </Link>

        {selectedContact !== null ? (
          <Contact
            contact={selectedContact}
            showContact={showContactDetail}
            handleCloseContact={handleCloseContact}
          />
        ) : null}

        <Switch>
          <Route exact path="/all-contacts">
            <Contacts
              title="All Contacts"
              coutryId={ALL_COUNTRY}
              showContacts={showContacts}
              selectedContactActive={handleSelectedContact}
            ></Contacts>
          </Route>
          <Route exact path="/us-contacts">
            <Contacts
              title="US Contacts"
              coutryId={US_COUNTRY}
              showContacts={showContacts}
              selectedContactActive={handleSelectedContact}
            ></Contacts>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
