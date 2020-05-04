import React from "react";

import { Link } from "react-router-dom";

import "./Footer-Link.scss";

type FooterLink = React.FC<{
  to: string;
}>;

const FooterLink: FooterLink = ({ children, to }) => {
  return (
    <Link className="Footer-Link" to={to}>
      {children}
    </Link>
  );
};

export default FooterLink;
