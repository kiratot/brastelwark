import { createStore, combineReducers, applyMiddleware } from "redux";
import dataReducer from "./data/dataReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import appReducer from "./app/appReducer";
const rootReducer = combineReducers({
  data: dataReducer,
  app: appReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
