import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./History.scss";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  mix: PropTypes.arrayOf(PropTypes.string)
};

const History = ({ children, mix }) => {
  const historyStyles = cn("History")(null, mix);

  return <div className={historyStyles}>{children}</div>;
};

History.propTypes = propTypes;

export default History;
