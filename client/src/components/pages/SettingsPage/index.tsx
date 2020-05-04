import React from "react";

import Header from "../../Header";
import Section from "../../Section";
import SettingsForm from "../../partials/SettingsForm";

const SettingsPage = () => {
  return (
    <>
      <Header>
        <Header.Logo />
      </Header>

      <Section>
        <SettingsForm />
      </Section>
    </>
  );
};

export default SettingsPage;
