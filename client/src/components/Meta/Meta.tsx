import React from "react";
import { cn, ClassNameList } from "@bem-react/classname";

import Text from "./Text/Meta-Text";
import Icon from "./Icon/Meta-Icon";

import "./Meta.scss";

type Meta = React.FC<{
  mix?: ClassNameList;
}>;

type MetaBemElements = {
  Text: typeof Text;
  Icon: typeof Icon;
};

const Meta: Meta & MetaBemElements = ({ children, mix }) => {
  const metaStyles = cn("Meta")(null, mix);
  return <div className={metaStyles}>{children}</div>;
};

Meta.Text = Text;
Meta.Icon = Icon;

export default Meta;
