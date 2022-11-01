import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  // state
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
