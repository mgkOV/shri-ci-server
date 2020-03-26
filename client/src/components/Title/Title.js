import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./Title.scss";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  mix: PropTypes.arrayOf(PropTypes.string)
};

const Title = ({ children, mix }) => {
  const titleStyles = cn("Title")(null, mix);

  return <div className={titleStyles}>{children}</div>;
};

Title.propTypes = propTypes;

export default Title;
