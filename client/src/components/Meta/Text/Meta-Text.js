import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./Meta-Text.scss";

const propTypes = {
  children: PropTypes.string,
  secondary: PropTypes.bool
};

const MetaText = ({ children, secondary }) => {
  const metaTextStyles = cn("Meta", "Text")({ secondary });
  return <div className={metaTextStyles}>{children}</div>;
};

MetaText.propTypes = propTypes;

export default MetaText;
