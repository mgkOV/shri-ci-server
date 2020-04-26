import React from "react";

import { cn, ClassNameList } from "@bem-react/classname";

import "./PopUp.scss";

import Content from "./Content/PopUp-Content";
import Title from "./Title/PopUp-Title";
import Label from "./Label/PopUp-Label";

type PopUp = React.FC<{
  mix?: ClassNameList;
}>;

type PopUpBemElements = {
  Title: typeof Title;
  Label: typeof Label;
  Content: typeof Content;
};

const PopUp: PopUp & PopUpBemElements = ({ children, mix }) => {
  const popUpStyles = cn("PopUp")(null, mix);
  return <div className={popUpStyles}>{children}</div>;
};

PopUp.Title = Title;
PopUp.Label = Label;
PopUp.Content = Content;

export default PopUp;
