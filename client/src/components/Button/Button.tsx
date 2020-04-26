import React, { ReactElement } from "react";
import { cn, ClassNameList } from "@bem-react/classname";

import "./Button.scss";

import Text from "./Text/Button-Text";
import Icon from "./Icon/Button-Icon";

interface ButtonProps {
  children: React.ReactNode;
  tone: "action" | "control" | "disabled";
  fullWidthAtSmallScreen: boolean;
  type: "text" | "icon" | "formControl" | "iconText";
  mix: ClassNameList;
  onClick(e: React.SyntheticEvent): void;
  btnType: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> & {
  Icon: typeof Icon;
  Text: typeof Text;
} = ({ children, tone, type, fullWidthAtSmallScreen, mix, onClick, btnType }) => {
  const buttonStyles = cn("Button")({ tone, type, fullWidthAtSmallScreen }, mix);

  return (
    <button
      type={btnType ? btnType : "button"}
      className={buttonStyles}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.Icon = Icon;
Button.Text = Text;

export default Button;
