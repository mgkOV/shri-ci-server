import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.scss";
import HomePage from "../pages/HomePage";
import SettingsPage from "../pages/SettingsPage";
import BuildPage from "../pages/BuildPage";
import NewBuildPopUp from "../partials/NewBuildPopUp";
import CiFooter from "../partials/CiFooter";
import { getSettings } from "../../redux/settings/settings.actions";

const App = ({ getSettings }) => {
  useEffect(() => {
    getSettings();
  }, [getSettings]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/settings" component={SettingsPage} />
        <Route path="/build/:id" component={BuildPage} />
      </Switch>

      <CiFooter />

      <NewBuildPopUp />
    </div>
  );
};

export default connect(null, { getSettings })(App);
