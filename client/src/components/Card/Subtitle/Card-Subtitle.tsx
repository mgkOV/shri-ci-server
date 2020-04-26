import React from "react";
import PropTypes from "prop-types";

import "./Card-Subtitle.scss";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired
};

const CardSubtitle = ({ children }) => {
  return <div className="Card-Subtitle">{children}</div>;
};

CardSubtitle.propTypes = propTypes;

export default CardSubtitle;
