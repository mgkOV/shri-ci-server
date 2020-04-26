import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

const HeaderBtnGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  let buttonGroupStyles = cn("Header")("BtnGroup");

  return <div className={buttonGroupStyles}>{children}</div>;
};

export default HeaderBtnGroup;
