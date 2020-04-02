import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Footer-Link.scss";

const propTypes = {
  to: PropTypes.string,
  children: PropTypes.string
};

const FooterLink = ({ children, to }) => {
  return (
    <Link className="Footer-Link" to={to}>
      {children}
    </Link>
  );
};

FooterLink.propTypes = propTypes;

export default FooterLink;
