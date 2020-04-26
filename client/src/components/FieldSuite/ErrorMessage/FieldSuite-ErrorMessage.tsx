import React from "react";

import "./FieldSuite-ErrorMessage.scss";

const FieldSuiteErrorMessage: React.FC = ({ children }) => {
  return <div className="FieldSuite-ErrorMessage">{children}</div>;
};

export default FieldSuiteErrorMessage;
