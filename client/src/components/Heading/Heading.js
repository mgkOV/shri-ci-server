import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./Heading.scss";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  mix: PropTypes.arrayOf(PropTypes.string)
};

const Heading = ({ children, mix }) => {
  const headingStyles = cn("Heading")(null, mix);

  return <div className={headingStyles}>{children}</div>;
};

Heading.propTypes = propTypes;

export default Heading;
