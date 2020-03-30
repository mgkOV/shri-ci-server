import React from "react";
import PropTypes from "prop-types";

import "./PopUp-Label.scss";

const propTypes = {
  children: PropTypes.string,
  htmlFor: PropTypes.string
};

const PopUpLabel = ({ children, htmlFor }) => {
  return (
    <label className="PopUp-Label" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

PopUpLabel.propTypes = propTypes;

export default PopUpLabel;
