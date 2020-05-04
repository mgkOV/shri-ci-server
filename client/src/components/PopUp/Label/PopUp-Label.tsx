import React from "react";

import "./PopUp-Label.scss";

type PopUpLabel = React.FC<{
  htmlFor: string;
}>;

const PopUpLabel: PopUpLabel = ({ children, htmlFor }) => {
  return (
    <label className="PopUp-Label" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default PopUpLabel;
