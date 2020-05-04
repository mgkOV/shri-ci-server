import React from "react";
import { cn, ClassNameList } from "@bem-react/classname";

import Link from "./Link/Footer-Link";
import LinkGroup from "./LinkGroup/Footer-LinkGroup";
import Copyright from "./Copyright/Footer-Copyright";

import "./Footer.scss";

type Footer = React.FC<{
  mix: ClassNameList;
}>;

type FooterBemElements = {
  Link: typeof Link;
  LinkGroup: typeof LinkGroup;
  Copyright: typeof Copyright;
};

const Footer: Footer & FooterBemElements = ({ children, mix }) => {
  const footerStyles = cn("Footer")(null, mix);
  return <div className={footerStyles}>{children}</div>;
};

Footer.Link = Link;
Footer.LinkGroup = LinkGroup;
Footer.Copyright = Copyright;

export default Footer;
