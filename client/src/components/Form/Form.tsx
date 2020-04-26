import React from "react";
import { cn, ClassNameList } from "@bem-react/classname";

import "./Form.scss";

import Error from "./Error/Form-Error";

type Form = React.FC<{
  mix: ClassNameList;
  handleSubmit(e: React.SyntheticEvent): void;
}>;

type FormBemElements = {
  Error: typeof Error;
};

const Form: Form & FormBemElements = ({ children, mix, handleSubmit }) => {
  const formStyles = cn("Form")(null, mix);
  return (
    <form className={formStyles} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

Form.Error = Error;

export default Form;
