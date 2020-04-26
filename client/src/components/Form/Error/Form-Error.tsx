import React from "react";

import "./Form-Error.scss";

const FormError: React.FC = ({ children }) => {
  return <div className="Form-Error">{children}</div>;
};

export default FormError;
