import React from "react";
import PropTypes from "prop-types";

import "./Footer-Copyright.scss";

const propTypes = {
  children: PropTypes.node.isRequired
};

const FooterCopyright = ({ children }) => {
  return <div className="Footer-Copyright">{children}</div>;
};

FooterCopyright.propTypes = propTypes;

export default FooterCopyright;
