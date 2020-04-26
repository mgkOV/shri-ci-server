import React from "react";
import { cn, ClassNameList } from "@bem-react/classname";

import "./StartScreen.scss";

import Title from "./Title/StartScreen-Title";
import Icon from "./Icon/StartScreen-Icon";

type StartScreen = React.FC<{
  mix: ClassNameList;
}>;

type StartScreenBemElements = {
  Title: typeof Title;
  Icon: typeof Icon;
};

const StartScreen: StartScreen & StartScreenBemElements = ({ children, mix }) => {
  const startScreenStyles = cn("StartScreen")(null, mix);
  return <div className={startScreenStyles}>{children}</div>;
};

StartScreen.Title = Title;
StartScreen.Icon = Icon;

export default StartScreen;
