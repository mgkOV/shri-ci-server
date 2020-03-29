import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./Card.scss";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  mix: PropTypes.arrayOf(PropTypes.string),
  view: PropTypes.oneOf(['high'])
  type: PropTypes.oneOf(["error", "success", "warning"])
};

const Card = ({ children, mix, view, type }) => {
  const cardStyles = cn("Card")({view, type}, mix);
  
  return <div className={cardStyles}>{children}</div>;
};

Card.propTypes = propTypes;

export default Card;
