import React from "react";

import "./SectionHeading-Title.scss";

const SectionHeadingTitle: React.FC = ({ children }) => {
  return <h2 className="SectionHeading-Title">{children}</h2>;
};

export default SectionHeadingTitle;
