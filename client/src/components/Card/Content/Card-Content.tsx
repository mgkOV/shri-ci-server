import React from "react";

import "./Card-Content.scss";

const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="Card-Content">{children}</div>;
};

export default CardContent;
