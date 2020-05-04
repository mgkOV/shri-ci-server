import React from "react";

import "./FieldSuite-Label.scss";

type FieldSuiteLabel = React.FC<{
  htmlFor: string;
}>;

const FieldSuiteLabel: FieldSuiteLabel = ({ children, htmlFor }) => {
  return (
    <label className="FieldSuite-Label" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default FieldSuiteLabel;
