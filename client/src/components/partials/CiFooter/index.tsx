import React from "react";

import Footer from "../../Footer";

const CiFooter: React.FC<{ text: TextData }> = ({ text }) => {
  return (
    <Footer mix={["App-Footer"]}>
      <Footer.LinkGroup>
        <Footer.Link to="/support">{text["04"]}</Footer.Link>
        <Footer.Link to="/learning">{text["05"]}</Footer.Link>
        <Footer.Link to="/learning">{text["06"]}</Footer.Link>
      </Footer.LinkGroup>
      <Footer.Copyright>© 2020 Your Name</Footer.Copyright>
    </Footer>
  );
};

export default CiFooter;
