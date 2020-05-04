import React from "react";

import "./Button-Text.scss";

const ButtonText: React.FC = ({ children }) => {
  return <span className="Button-Text">{children}</span>;
};

export default ButtonText;
