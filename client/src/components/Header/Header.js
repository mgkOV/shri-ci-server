import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./Header.scss";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  mix: PropTypes.arrayOf(PropTypes.string)
};

const Header = ({ children, mix }) => {
  const headerStyles = cn("Header")(null, mix);
  return <div className={headerStyles}>{children}</div>;
};

Header.propTypes = propTypes;

export default Header;
