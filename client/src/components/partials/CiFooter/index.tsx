import React from "react";

import Footer from "../../Footer";

const CiFooter = () => {
  return (
    <Footer mix={["App-Footer"]}>
      <Footer.LinkGroup>
        <Footer.Link to="/support">Support</Footer.Link>
        <Footer.Link to="/learning">Learning</Footer.Link>
        <Footer.Link to="/learning">Русская версия</Footer.Link>
      </Footer.LinkGroup>
      <Footer.Copyright>© 2020 Your Name</Footer.Copyright>
    </Footer>
  );
};

export default CiFooter;
