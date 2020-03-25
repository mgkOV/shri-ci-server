import React from "react";

import Header from "../../Header";
import Button from "../../Button";
import Section from "../../Section";
import StartScreen from "../../StartScreen";

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

      <Section mix={["App-Section"]}>
        <StartScreen>
          <StartScreen.Icon />
          <StartScreen.Title>
            Configure repository connection and synchronization settings
          </StartScreen.Title>
          <Button type="formControl" tone="action">
            <Button.Text>Open settings</Button.Text>
          </Button>
        </StartScreen>
      </Section>
    </>
  );
};

export default HomePage;
