import React from "react";

import { cn, ClassNameList } from "@bem-react/classname";

import "./History.scss";

type History = React.FC<{
  mix?: ClassNameList;
}>;

const History: History = ({ children, mix }) => {
  const historyStyles = cn("History")(null, mix);

  return <div className={historyStyles}>{children}</div>;
};

export default History;
