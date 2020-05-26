import React from "react";

import Footer from "../../Footer";
import { toggleLang } from "../../../redux/lang/lang.actions";

const CiFooter: React.FC<{ text: TextData; toggleLang(): void }> = ({
  text,
  toggleLang,
}) => {
  return (
    <Footer mix={["App-Footer"]}>
      <Footer.LinkGroup>
        <Footer.Link to="/support">{text["04"]}</Footer.Link>
        <Footer.Link to="/learning">{text["05"]}</Footer.Link>
        <Footer.Span onClick={() => toggleLang()}>{text["06"]}</Footer.Span>
      </Footer.LinkGroup>
      <Footer.Copyright>© 2020 Your Name</Footer.Copyright>
    </Footer>
  );
};

export default CiFooter;
