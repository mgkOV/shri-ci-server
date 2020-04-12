import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./Header-BtnGroup.scss";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired
};

const HeaderBtnGroup = ({ children }) => {
  let buttonGroupStyles = cn("Header")("BtnGroup");

  return <div className={buttonGroupStyles}>{children}</div>;
};

HeaderBtnGroup.propTypes = propTypes;

export default HeaderBtnGroup;
