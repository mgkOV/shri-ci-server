import React from "react";
import { cn } from "@bem-react/classname";

import "./Status-Number.scss";

type StatusNumber = React.FC<{
  view: "error" | "success" | "waiting";
}>;

const StatusNumber: StatusNumber = ({ children, view }) => {
  const statusNumberStyle = cn("Status", "Number")({ view });

  return <div className={statusNumberStyle}>{children}</div>;
};

export default StatusNumber;
