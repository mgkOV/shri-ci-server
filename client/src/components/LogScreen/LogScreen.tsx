import React from "react";
import { cn, ClassNameList } from "@bem-react/classname";
import Convert from "ansi-to-html";
import "./LogScreen.scss";

const convert = new Convert({ fg: "#000", bg: "#000", newline: true });

type LogScreen = React.FC<{
  log: string;
  mix?: ClassNameList;
}>;

const LogScreen: LogScreen = ({ mix, log }) => {
  const logScreenStyles = cn("LogScreen")(null, mix);
  const logHtml = { __html: convert.toHtml(log) };

  return <div className={logScreenStyles} dangerouslySetInnerHTML={logHtml} />;
};

export default LogScreen;
