import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./Header.scss";

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  mix: PropTypes.arrayOf(PropTypes.string)
};

const Header = ({ children, mix }) => {
  const headerStyles = cn("Header")(mix);
  return <div className={headerStyles}>{children}</div>;
};

Header.propTypes = propTypes;

export default Header;
