import React from "react";
import { createStructuredSelector } from "reselect";
import { History } from "history";

import { connect } from "react-redux";
import { selectSettingsData } from "../../../redux/settings/settings.selectors";
import { selectTextData } from "../../../redux/text/text.selectors";

import BuildHistoryScreen from "./BuildHistoryScreen";
import StartScreen from "./StartScreen";

type HomePage = React.FC<{
  history: History;
  settings: SettingsShriApi;
  text: TextData;
}>;

const HomePage: HomePage = ({ history, settings, text }) => {
  return settings && settings.id ? (
    <BuildHistoryScreen text={text} />
  ) : (
    <StartScreen history={history} text={text} />
  );
};

const mapState = createStructuredSelector({
  settings: selectSettingsData,
  text: selectTextData,
});

export default connect(mapState)(HomePage);
