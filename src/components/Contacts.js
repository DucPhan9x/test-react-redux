import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import CustomScrollbars from "./CustomScrollbars";
import { updateCountry, incrementPageNo } from "../actions/filterContactAction";
import { fetchContacts } from "../actions/contactsAction";
import ModalContacts from "../components/ModalContacts";
const filterEvenContacts = createSelector(
  [(state) => state.contacts.data, (state) => state.filter.isOnlyEven],
  (contacts, onlyEven) => {
    if (onlyEven) return contacts.filter((contact) => contact.id % 2 === 0);
    return contacts;
  }
);

const mapStateToProps = (state) => ({
  contactsData: filterEvenContacts(state),
  pageNo: state.filter.pageNo,
  searchKeyword: state.filter.searchKeyword,
  loading: state.contacts.loading,
  isErrors: state.contacts.hasErrors,
});

const mapDispatchToProps = (dispatch) => ({
  setCountry: (countryId) => dispatch(updateCountry(countryId)),
  nextPage: () => dispatch(incrementPageNo()),
  fetchData: (countryId, searchKey, pageNo) =>
    dispatch(fetchContacts(countryId, searchKey, pageNo)),
});
const Contacts = ({
  countryId,
  title,
  showContacts,
  pageNo,
  searchKeyword,
  contactsData,
  loading,
  isErrors,
  selectedContactActive,
  fetchData,
  setCountry,
  nextPage,
}) => {
  const setCountryCallback = useCallback(() => setCountry(countryId), [
    countryId,
    setCountry,
  ]);
  useEffect(() => {
    setCountryCallback();
  }, [setCountryCallback]);

  useEffect(() => {
    fetchData(countryId, searchKeyword, pageNo);
  }, [countryId, searchKeyword, pageNo, fetchData]);

  const onReachedToBottom = useCallback(() => {
    nextPage();
  }, [nextPage]);
  return (
    <ModalContacts title={title} isOpen={showContacts} isLoading={loading}>
      {!isErrors && (
        <CustomScrollbars
          onReachedBottom={onReachedToBottom}
          style={{ height: 350 }}
        >
          {contactsData.map((contact, id) => (
            <div
              key={id}
              className="d-flex"
              onClick={() => selectedContactActive(contact)}
            >
              <p className="mr-3">{contact.id}</p>
              <p className="mr-3">
                <strong>
                  {contact.first_name} {contact.last_name}
                </strong>
              </p>
              <p className="mr-3">{contact.email}</p>
              <p>{contact.phone_number}</p>
            </div>
          ))}
        </CustomScrollbars>
      )}
      {isErrors && "Error!"}
    </ModalContacts>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
