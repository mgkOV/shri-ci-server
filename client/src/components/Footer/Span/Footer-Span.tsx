import React from "react";

import "./Footer-Span.scss";

type FooterSpan = React.FC<{
  onClick?(e: React.SyntheticEvent): void;
}>;

const FooterSpan: FooterSpan = ({ children, onClick }) => {
  return (
    <span className="Footer-Span Footer-Link" onClick={onClick}>
      {children}
    </span>
  );
};

export default FooterSpan;
