import React from "react";

import "./PopUp-Content.scss";

const PopUpContent: React.FC = ({ children }) => {
  return <div className="PopUp-Content">{children}</div>;
};

export default PopUpContent;
