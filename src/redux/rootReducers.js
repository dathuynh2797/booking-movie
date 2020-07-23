import { combineReducers } from "redux";
import modalState from "./reducers/modalReduces";

const rootReducer = combineReducers({
  modalState,
});

export default rootReducer;
