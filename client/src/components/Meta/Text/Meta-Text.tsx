import React from "react";
import { cn } from "@bem-react/classname";

import "./Meta-Text.scss";

type MetaText = React.FC<{
  secondary?: boolean;
}>;

const MetaText: MetaText = ({ children, secondary }) => {
  const metaTextStyles = cn("Meta", "Text")({ secondary });
  return <div className={metaTextStyles}>{children}</div>;
};

export default MetaText;
