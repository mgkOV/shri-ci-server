import React from "react";

import Header from "../../Header";
import Button from "../../Button";
import Section from "../../Section";

import BuildHistory from "../../partials/BuildHistory";

const BuildHistroyPage = props => {
  return (
    <>
      <Header>
        <Header.BuildTitle>
          philip1967/my-awesome-repo-with-long-long-long-repo-name
        </Header.BuildTitle>
        <Header.BtnGroup>
          <Button type="iconText" tone="control" mix={["Header-Button"]}>
            <Button.Icon icon="build" />
            <Button.Text>Run build</Button.Text>
          </Button>
          <Button type="icon" tone="control" mix={["Header-Button"]}>
            <Button.Icon icon="settings" />
          </Button>
        </Header.BtnGroup>
      </Header>

      <Section>
        <BuildHistory />
        <Button type="text" tone="control" fullWidthAtSmallScreen>
          <Button.Text>Show more</Button.Text>
        </Button>
      </Section>
    </>
  );
};

export default BuildHistroyPage;
