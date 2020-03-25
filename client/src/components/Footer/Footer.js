import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./Footer.scss";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  mix: PropTypes.arrayOf(PropTypes.string)
};

const Footer = ({ children, mix }) => {
  const footerStyles = cn("Footer")(mix);
  return <div className={footerStyles}>{children}</div>;
};

Footer.propTypes = propTypes;

export default Footer;
