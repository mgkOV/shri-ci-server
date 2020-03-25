import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./Section.scss";

const propTypes = {
  children: PropTypes.node.isRequired,
  mix: PropTypes.arrayOf(PropTypes.string)
};

const Section = ({ children, mix }) => {
  const sectionStyles = cn("Section")(null, mix);
  return <div className={sectionStyles}>{children}</div>;
};

Section.propTypes = propTypes;

export default Section;
