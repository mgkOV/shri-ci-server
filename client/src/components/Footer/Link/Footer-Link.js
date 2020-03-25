import React from "react";
import PropTypes from "prop-types";

import "./Footer-Link.scss";

const propTypes = {
  to: PropTypes.string,
  children: PropTypes.string
};

const FooterLink = ({ children, to }) => {
  return (
    <a className="Footer-Link" href={to}>
      {children}
    </a>
  );
};

FooterLink.propTypes = propTypes;

export default FooterLink;
