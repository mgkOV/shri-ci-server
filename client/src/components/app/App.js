import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import HomePage from "../pages/HomePage";
import SettingsPage from "../pages/SettingsPage";
import BuildHistoryPage from "../pages/BuildHistoryPage";
import BuildPage from "../pages/BuildPage";

import NewBuildPopUp from "../partials/NewBuildPopUp";
import CiFooter from "../partials/CiFooter";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/settings" component={SettingsPage} />
        <Route exact path="/history" component={BuildHistoryPage} />
        <Route path="/build/:id" component={BuildPage} />
      </Switch>

      <CiFooter />

      {false && <NewBuildPopUp />}
    </div>
  );
}

export default App;
