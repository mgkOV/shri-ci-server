import React from "react";

import Header from "../../Header";
import Section from "../../Section";
import Title from "../../Title";

const SettingsPage = props => {
  return (
    <>
      <Header>
        <Header.Title view="secondary">School CI server</Header.Title>
      </Header>

      <Section>
        <Title>
          <Title.Heading>Settings</Title.Heading>
          <Title.Subtitle>
            Configure repository connection and synchronization settings.
          </Title.Subtitle>
        </Title>
      </Section>
    </>
  );
};

export default SettingsPage;
