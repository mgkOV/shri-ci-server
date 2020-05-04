import React from "react";
import { cn, ClassNameList } from "@bem-react/classname";

import Number from "./Number/Status-Number";
import Comment from "./Comment/Status-Comment";

import "./Status.scss";

type Status = React.FC<{
  mix: ClassNameList;
}>;

type StatusBemElements = {
  Number: typeof Number;
  Comment: typeof Comment;
};

const Status: Status & StatusBemElements = ({ children, mix }) => {
  const statusStyles = cn("Status")(null, mix);
  return <div className={statusStyles}>{children}</div>;
};

Status.Number = Number;
Status.Comment = Comment;

export default Status;
