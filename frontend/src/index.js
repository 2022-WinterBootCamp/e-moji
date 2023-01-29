import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import rootReducer from "../src/reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const store = createStore(rootReducer, applyMiddleware(thunk));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
