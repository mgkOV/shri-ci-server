import React from "react";

import "./FieldSuite-Input.scss";

type FieldSuiteInput = React.FC<{
  placeholder: string;
  name: string;
  value: string | number;
  handleChange(i: string): void;
}>;

const FieldSuiteInput: FieldSuiteInput = ({
  placeholder = "",
  name,
  value,
  handleChange,
}) => {
  const cleanIcon = (
    <div className="FieldSuite-Cleaner" onClick={(e) => handleChange("")}></div>
  );

  return (
    <div className="FieldSuite-Input">
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      {value !== "" && cleanIcon}
    </div>
  );
};

export default FieldSuiteInput;
