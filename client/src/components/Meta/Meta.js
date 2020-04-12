import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./Meta.scss";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  mix: PropTypes.arrayOf(PropTypes.string)
};

const Meta = ({ children, mix }) => {
  const metaStyles = cn("Meta")(null, mix);
  return <div className={metaStyles}>{children}</div>;
};

Meta.propTypes = propTypes;

export default Meta;
