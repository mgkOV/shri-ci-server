import React from "react";
import PropTypes from "prop-types";

import "./Header.scss";

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

const Header = ({ children }) => {
  return <div className="Header">{children}</div>;
};

Header.propTypes = propTypes;

export default Header;
