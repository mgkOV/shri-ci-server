import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./Section.scss";

const propTypes = {
  children: PropTypes.node.isRequired,
  mix: PropTypes.arrayOf(PropTypes.string),
  bottomSpace: PropTypes.oneOf(["no"])
};

const Section = ({ children, mix, bottomSpace }) => {
  const sectionStyles = cn("Section")({ bottomSpace }, mix);
  return <div className={sectionStyles}>{children}</div>;
};

Section.propTypes = propTypes;

export default Section;
