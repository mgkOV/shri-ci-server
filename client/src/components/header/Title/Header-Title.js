import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./Header-Title.scss";

const propTypes = { children: PropTypes.string, view: PropTypes.oneOf(["base", "secondary"]) };

const HeaderTitle = ({ children, view }) => {
  const titleStyle = cn("Header")("Title", { view });
  return <h1 className={titleStyle}>{children}</h1>;
};

HeaderTitle.propTypes = propTypes;

export default HeaderTitle;
