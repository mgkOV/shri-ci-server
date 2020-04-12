import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";
import Convert from "ansi-to-html";
import "./LogScreen.scss";

const convert = new Convert({ fg: "#000", bg: "#000", newline: true });

const propTypes = {
  log: PropTypes.string,
  mix: PropTypes.arrayOf(PropTypes.string)
};

const LogScreen = ({ children, mix, log }) => {
  const logScreenStyles = cn("LogScreen")(null, mix);
  const logHtml = { __html: convert.toHtml(log) };

  return <div className={logScreenStyles} dangerouslySetInnerHTML={logHtml} />;
};

LogScreen.propTypes = propTypes;

export default LogScreen;
