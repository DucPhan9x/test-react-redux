import filterContactReducer from "./filterContactReducer";
import contactsReducer from "./contactsReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  filter: filterContactReducer,
  contacts: contactsReducer,
});

export default reducers;
