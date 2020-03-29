import React from "react";
import PropTypes from "prop-types";

import "./Card-Content.scss";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired
};

const CardContent = ({ children }) => {
  return <div className="Card-Content">{children}</div>;
};

CardContent.propTypes = propTypes;

export default CardContent;
