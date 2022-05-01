import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import entriesReducer from "../reducers/entries.reducer";
import modalsReducer from "../reducers/modals.reducer";

const storeConfig = () => {
  return createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReducer,
    }),
    composeWithDevTools()
  );
};
export default storeConfig;
