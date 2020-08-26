import axios from "axios";
import {
  GET_CONTACTS,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  RESET_CONTACTS,
} from "../constants/actionType";
import { AUTH_TOKEN, COMPANY_ID } from "../constants/constants";

export const getContacts = () => ({ type: GET_CONTACTS });
export const getContactsSuccess = (contacts) => ({
  type: GET_CONTACTS_SUCCESS,
  payload: contacts,
});
export const getContactsFailure = () => ({ type: GET_CONTACTS_FAIL });
export const resetContacts = () => ({ type: RESET_CONTACTS });

export function fetchContacts(countryId, queryString, pageNo) {
  return async (dispatch) => {
    if (pageNo === 1) dispatch(resetContacts());
    dispatch(getContacts());

    const params = {
      companyId: COMPANY_ID,
      page: pageNo,
    };

    if (countryId !== 0) params["countryId"] = countryId;
    if (queryString.length > 0) params["query"] = queryString;
    const config = {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      params: params,
    };

    try {
      const response = await axios.get(
        "https://api.dev.pastorsline.com/api/contacts.json",
        config
      );
      const contacts = [];
      for (let id in response.data.contacts) {
        contacts.push(response.data.contacts[id]);
      }
      dispatch(getContactsSuccess(contacts));
    } catch (error) {
      dispatch(getContactsFailure());
    }
  };
}
