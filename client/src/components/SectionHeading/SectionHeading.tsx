import React from "react";
import { cn, ClassNameList } from "@bem-react/classname";

import "./SectionHeading.scss";

import Title from "./Title/SectionHeading-Title";
import Subtitle from "./Subtitle/SectionHeading-Subtitle";

type SectionHeading = React.FC<{
  mix?: ClassNameList;
}>;

type SectionHeadingBemElements = {
  Title: typeof Title;
  Subtitle: typeof Subtitle;
};

const SectionHeading: SectionHeading & SectionHeadingBemElements = ({
  children,
  mix,
}) => {
  const sectionHeadingStyles = cn("SectionHeading")(null, mix);

  return <div className={sectionHeadingStyles}>{children}</div>;
};

SectionHeading.Title = Title;
SectionHeading.Subtitle = Subtitle;

export default SectionHeading;
