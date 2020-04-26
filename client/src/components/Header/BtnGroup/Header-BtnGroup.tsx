import React from "react";

import "./Header-BtnGroup.scss";

const HeaderBtnGroup: React.FC = ({ children }) => {
  return <div className="Header-BtnGroup">{children}</div>;
};

export default HeaderBtnGroup;
