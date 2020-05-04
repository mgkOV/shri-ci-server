import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.scss";
import App from "./components/App";
import ErrorBoundry from "./components/ErrorBoundry";
import { getSettings } from "./redux/settings/settings.actions";

import configureStore from "./redux/store";

declare global {
  interface Window {
    __REDUX_STATE__: string;
  }
}

const store = configureStore(window.__REDUX_STATE__ || {});

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
