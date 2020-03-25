import React from "react";

import Header from "../../Header";
import Section from "../../Section";
import Heading from "../../Heading";

const SettingsPage = props => {
  return (
    <>
      <Header>
        <Header.Title view="secondary">School CI server</Header.Title>
      </Header>
      <Section>
        <Heading>
          <Heading.Title>Settings</Heading.Title>
          <Heading.Subtitle>
            Configure repository connection and synchronization settings.
          </Heading.Subtitle>
        </Heading>
      </Section>
    </>
  );
};

export default SettingsPage;
