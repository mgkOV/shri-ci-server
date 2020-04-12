import React from "react";
import PropTypes from "prop-types";

import "./PopUp-Content.scss";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired
};

const PopUpContent = ({ children }) => {
  return <div className="PopUp-Content">{children}</div>;
};

PopUpContent.propTypes = propTypes;

export default PopUpContent;
