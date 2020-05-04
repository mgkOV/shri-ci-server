import React from "react";

import { cn, ClassNameList } from "@bem-react/classname";

import "./Section.scss";

type Section = React.FC<{
  mix?: ClassNameList;
  bottomSpace?: "no";
}>;

const Section: Section = ({ children, mix, bottomSpace }) => {
  const sectionStyles = cn("Section")({ bottomSpace }, mix);
  return <div className={sectionStyles}>{children}</div>;
};

export default Section;
