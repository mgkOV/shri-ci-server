import React from "react";
import { cn, ClassNameList } from "@bem-react/classname";

import "./FieldSuite.scss";

import Label from "./Label/FieldSuite-Label";
import Input from "./Input/FieldSuite-Input";
import Hint from "./Hint/FieldSuite-Hint";
import ErrorMessage from "./ErrorMessage/FieldSuite-ErrorMessage";

type FieldSuite = React.FC<{
  mix?: ClassNameList;
  hasHint?: boolean;
  required?: boolean;
  error?: boolean;
}>;

type FieldSuiteBemElements = {
  Label: typeof Label;
  Input: typeof Input;
  Hint: typeof Hint;
  ErrorMessage: typeof ErrorMessage;
};

const FieldSuite: FieldSuite & FieldSuiteBemElements = ({
  children,
  mix,
  hasHint,
  required,
  error,
}) => {
  const fieldSuitStyles = cn("FieldSuite")({ hasHint, required, error }, mix);
  return <div className={fieldSuitStyles}>{children}</div>;
};

FieldSuite.Label = Label;
FieldSuite.Input = Input;
FieldSuite.Hint = Hint;
FieldSuite.ErrorMessage = ErrorMessage;

export default FieldSuite;
