import {
  GET_CONTACTS,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  RESET_CONTACTS,
} from "../constants/actionType";
export const initialState = {
  data: [],
  loading: false,
  isErrors: false,
};

export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return { ...state, loading: true, isErrors: false };
    case GET_CONTACTS_SUCCESS:
      return {
        data: [...action.payload],
        loading: false,
        isErrors: false,
      };
    case GET_CONTACTS_FAIL:
      return { ...state, loading: false, isErrors: true };
    case RESET_CONTACTS:
      return initialState;
    default:
      return state;
  }
}
