import React from "react";
import { cn } from "@bem-react/classname";

import "./Card-Time.scss";

const CardTime: React.FC<{ position?: "bottom" }> = ({ children, position }) => {
  const cardTimeStatus = cn("Card", "Time")({ position });

  return <div className={cardTimeStatus}>{children}</div>;
};

export default CardTime;
