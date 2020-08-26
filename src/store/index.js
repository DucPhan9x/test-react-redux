import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import reducers from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, createLogger()))
);

export default store;
