import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.scss";
import HomePage from "../pages/HomePage";
import SettingsPage from "../pages/SettingsPage";
import BuildPage from "../pages/BuildPage";
import CiFooter from "../partials/CiFooter";
import Loader from "../Loader";
import Section from "../Section";
import { selectIsSettingsFetching } from "../../redux/settings/settings.selectors";
import { selectTextData } from "../../redux/text/text.selectors";
import { toggleLang } from "../../redux/lang/lang.actions";

type App = React.FC<{
  isSettingsFetching: boolean;
  text: TextData;
  toggleLang(): void;
}>;

const App: App = ({ isSettingsFetching, text, toggleLang }) => {
  let appContent = (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/settings" component={SettingsPage} />
        <Route path="/build/:buildId" component={BuildPage} />
      </Switch>

      <CiFooter text={text} toggleLang={toggleLang} />
    </>
  );

  if (isSettingsFetching) {
    appContent = (
      <>
        <Section mix={["App-Section"]}>
          <Loader />
        </Section>
        <CiFooter text={text} toggleLang={toggleLang} />
      </>
    );
  }

  return <div className="App">{appContent}</div>;
};

const mapState = createStructuredSelector({
  isSettingsFetching: selectIsSettingsFetching,
  text: selectTextData,
});

export default connect(mapState, { toggleLang })(App);
