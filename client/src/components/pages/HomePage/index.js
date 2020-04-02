import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { selectSettingsData } from "../../../redux/settings/settings.selectors";

import BuildHistoryScreen from "./BuildHistoryScreen";
import StartScreen from "./StartScreen";

const propsTypes = {
  history: PropTypes.object //react-router-dom
};

const HomePage = ({ history, settings }) => {
  return settings ? <BuildHistoryScreen history={history} /> : <StartScreen history={history} />;
};

HomePage.propsTypes = propsTypes;

const mapState = state => ({
  settings: selectSettingsData(state)
});

export default connect(mapState)(HomePage);
