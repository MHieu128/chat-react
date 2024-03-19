import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddkeware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddkeware(thunk))
);

export default store;
