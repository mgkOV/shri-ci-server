import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

// import BuildHistoryScreen from "./BuildHistoryScreen";
import StartScreen from "./StartScreen";

const propsTypes = {
  history: PropTypes.object //react-router-dom
};

const HomePage = ({ history }) => {
  return <StartScreen history={history} />;
};

HomePage.propsTypes = propsTypes;

export default connect()(HomePage);
