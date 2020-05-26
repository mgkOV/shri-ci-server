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
  } catch {
    // ignore write errors
  }
};

// Listener to state chage
let currentLang: string;
const handleLangChange = () => {
  let previousLang = currentLang;
  currentLang = store.getState().lang;

  if (previousLang !== currentLang) {
    saveLang(currentLang);
    store.dispatch(getText(currentLang));
  }
};

const store = configureStore();

//save lang and load text on store change
store.subscribe(handleLangChange);

store.dispatch(getSettings());

const lang = store.getState().lang;
store.dispatch(getText(lang));

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
