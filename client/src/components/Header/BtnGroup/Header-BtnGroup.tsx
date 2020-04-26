import React from "react";
import { cn } from "@bem-react/classname";

const HeaderBtnGroup: React.FC = ({ children }) => {
  let buttonGroupStyles = cn("Header")("BtnGroup");

  return <div className={buttonGroupStyles}>{children}</div>;
};

export default HeaderBtnGroup;
