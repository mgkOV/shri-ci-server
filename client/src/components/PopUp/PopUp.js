import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./PopUp.scss";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  mix: PropTypes.arrayOf(PropTypes.string)
};

const PopUp = ({ children, mix }) => {
  const popUpStyles = cn("PopUp")(null, mix);
  return <div className={popUpStyles}>{children}</div>;
};

PopUp.propTypes = propTypes;

export default PopUp;
