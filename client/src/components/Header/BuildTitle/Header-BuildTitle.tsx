import React from "react";

import "./Header-BuildTitle.scss";

const HeaderTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h1 className="Header-BuildTitle">{children}</h1>;
};

export default HeaderTitle;
