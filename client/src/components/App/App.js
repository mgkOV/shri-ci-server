import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.scss";
import HomePage from "../pages/HomePage";
import SettingsPage from "../pages/SettingsPage";
import BuildPage from "../pages/BuildPage";
import NewBuildPopUp from "../partials/NewBuildPopUp";
import CiFooter from "../partials/CiFooter";
import Loader from "../Loader";
import Section from "../Section";
import { getSettings } from "../../redux/settings/settings.actions";
import { selectIsSettingsFetching } from "../../redux/settings/settings.selectors";

const App = ({ getSettings, isSettingsFetching }) => {
  useEffect(() => {
    getSettings();
  }, [getSettings]);

  let appContent = (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/settings" component={SettingsPage} />
        <Route path="/build/:id" component={BuildPage} />
      </Switch>

      <CiFooter />

      <NewBuildPopUp />
    </>
  );

  if (isSettingsFetching) {
    appContent = (
      <>
        <Section mix={["App-Section"]}>
          <Loader />
        </Section>
        <CiFooter />
      </>
    );
  }

  return <div className="App">{appContent}</div>;
};

const mapState = state => ({
  isSettingsFetching: selectIsSettingsFetching(state)
});

export default connect(mapState, { getSettings })(App);
