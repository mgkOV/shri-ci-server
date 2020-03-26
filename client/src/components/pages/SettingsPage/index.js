import React from "react";

import Header from "../../Header";
import Section from "../../Section";
import SectionHeading from "../../SectionHeading";

const SettingsPage = props => {
  return (
    <>
      <Header>
        <Header.Title view="secondary">School CI server</Header.Title>
      </Header>

      <Section>
        <SectionHeading>
          <SectionHeading.Title>Settings</SectionHeading.Title>
          <SectionHeading.Subtitle>
            Configure repository connection and synchronization settings.
          </SectionHeading.Subtitle>
        </SectionHeading>
      </Section>
    </>
  );
};

export default SettingsPage;
