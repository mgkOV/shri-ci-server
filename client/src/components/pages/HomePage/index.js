import React from "react";

import Header from "../../Header";
import Button from "../../Button";
import Section from "../../Section";
import StartScreenGreeting from "../../partials/StartScreenGreeting";

const HomePage = () => {
  return (
    <>
      <Header>
        <Header.Logo />
        <Header.BtnGroup>
          <Button type="iconText" tone="control" mix={["Header-Button"]}>
            <Button.Icon icon="settings" />
            <Button.Text>Settings</Button.Text>
          </Button>
        </Header.BtnGroup>
      </Header>

      <Section mix={["App-Section"]}>
        <StartScreenGreeting />
      </Section>
    </>
  );
};

export default HomePage;
