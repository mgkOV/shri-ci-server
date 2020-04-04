import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.scss";
import App from "./components/App";
import ErrorBoundry from "./components/ErrorBoundry";
import { getSettings } from "./redux/settings/settings.actions";

import * as serviceWorker from "./serviceWorker";

import store from "./redux/store";

store.dispatch(getSettings());

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundry>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ErrorBoundry>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
