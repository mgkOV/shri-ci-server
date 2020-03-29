import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./Card-Time.scss";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  position: PropTypes.oneOf(["bottom"])
};

const CardTime = ({ children, position }) => {
  const cardTimeStatus = cn("Card", "Time")({ position });

  return <div className={cardTimeStatus}>{children}</div>;
};

CardTime.propTypes = propTypes;

export default CardTime;
