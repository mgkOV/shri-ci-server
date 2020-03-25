import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./Header-BtnGroup.scss";

const propTypes = {
  mix: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
};

const HeaderBtnGroup = ({ mix, children }) => {
  let buttonGroupStyles = cn("Header")("BtnGroup", mix);

  return <div className={buttonGroupStyles}>{children}</div>;
};

HeaderBtnGroup.propTypes = propTypes;

export default HeaderBtnGroup;
