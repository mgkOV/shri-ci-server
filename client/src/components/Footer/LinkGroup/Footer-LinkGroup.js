import React from "react";
import PropTypes from "prop-types";

import "./Footer-LinkGroup.scss";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired
};

const FooterLinkGroup = ({ children }) => {
  return <div className="Footer-LinkGroup">{children}</div>;
};

FooterLinkGroup.propTypes = propTypes;

export default FooterLinkGroup;
