import { createStore, combineReducers } from "redux";
import secondHeaderReducer from "./reducers/secondHeaderReducer";

const rootReducer = combineReducers({
  secondHeaderReducer
});

const store = createStore(rootReducer);

export default store;
