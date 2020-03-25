import React from "react";

import Header from "../../Header";
import Button from "../../Button";
import Section from "../../Section";

const HomePage = () => {
  return (
    <>
      <Header>
        <Header.Title view="secondary">School CI server</Header.Title>
        <Header.BtnGroup>
          <Button type="iconText" tone="control" mix={["Header-Button"]}>
            <Button.Icon icon="settings" />
            <Button.Text>Settings</Button.Text>
          </Button>
        </Header.BtnGroup>
      </Header>
      <Section mix={["App-Section"]}>1</Section>
    </>
  );
};

export default HomePage;
