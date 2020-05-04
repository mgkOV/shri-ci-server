import React from "react";

import { cn, ClassNameList } from "@bem-react/classname";

import "./ButtonGroup.scss";

type ButtonGroup = React.FC<{
  mix: ClassNameList;
}>;

const ButtonGroup: ButtonGroup = ({ children, mix }) => {
  const buttonGroupStyles = cn("ButtonGroup")(null, mix);
  return <div className={buttonGroupStyles}>{children}</div>;
};

export default ButtonGroup;
