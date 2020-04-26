import React from "react";
import { cn, ClassNameList } from "@bem-react/classname";

import "./Card.scss";

import Subtitle from "./Subtitle/Card-Subtitle";
import Time from "./Time/Card-Time";
import Content from "./Content/Card-Content";

type Card = React.FC<{
  children: React.ReactNode;
  mix?: ClassNameList;
  view?: "high";
  type: "error" | "success" | "waiting";
  onClick(e: React.SyntheticEvent): void;
}>;

type CardBemElement = {
  Subtitle: typeof Subtitle;
  Content: typeof Content;
  Time: typeof Time;
};

const Card: Card & CardBemElement = ({ children, mix, view, type, onClick }) => {
  const cardStyles = cn("Card")({ view, type }, mix);

  return (
    <div className={cardStyles} onClick={onClick}>
      {children}
    </div>
  );
};

Card.Subtitle = Subtitle;
Card.Content = Content;
Card.Time = Time;

export default Card;
