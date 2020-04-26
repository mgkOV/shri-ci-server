import React from "react";
import { createStructuredSelector } from "reselect";
import { History } from "history";

import { connect } from "react-redux";
import { selectSettingsData } from "../../../redux/settings/settings.selectors";

import BuildHistoryScreen from "./BuildHistoryScreen";
import StartScreen from "./StartScreen";

type HomePage = React.FC<{
  history: History;
  settings: SettingsShriApi;
}>;

const HomePage: HomePage = ({ history, settings }) => {
  return settings && settings.id ? (
    <BuildHistoryScreen />
  ) : (
    <StartScreen history={history} />
  );
};

const mapState = createStructuredSelector({
  settings: selectSettingsData,
});

export default connect(mapState)(HomePage);
