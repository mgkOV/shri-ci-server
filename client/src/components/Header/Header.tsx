import React from "react";
import { cn, ClassNameList } from "@bem-react/classname";

import BtnGroup from "./BtnGroup/Header-BtnGroup";
import Logo from "./Logo/Header-Logo";
import BuildTitle from "./BuildTitle/Header-BuildTitle";

import "./Header.scss";

type Header = React.FC<{
  mix?: ClassNameList;
}>;

type HeaderBemElement = {
  BtnGroup: typeof BtnGroup;
  Logo: typeof Logo;
  BuildTitle: typeof BuildTitle;
};

const Header: Header & HeaderBemElement = ({ children, mix }) => {
  const headerStyles = cn("Header")(null, mix);
  return <div className={headerStyles}>{children}</div>;
};

Header.BtnGroup = BtnGroup;
Header.Logo = Logo;
Header.BuildTitle = BuildTitle;

export default Header;
