import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.scss";
import App from "./components/App";
import ErrorBoundry from "./components/ErrorBoundry";
import { getSettings } from "./redux/settings/settings.actions";
import { getText } from "./redux/text/text.actions";

import configureStore from "./redux/store";

const saveLang = (lang: string) => {
  try {
    localStorage.setItem("shri_lang", lang);
    window.location.reload();
  } catch {
    // ignore write errors
  }
};

const store = configureStore();

//save lang and load text on store change
// Listener to state chage
let currentLang = store.getState().lang;
const handleLangChange = () => {
  let previousLang = currentLang;
  currentLang = store.getState().lang;

  if (previousLang !== currentLang) {
    saveLang(currentLang);
  }
};

store.subscribe(handleLangChange);

store.dispatch(getSettings());

store.dispatch(getText(currentLang));

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
