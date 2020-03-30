import React from "react";

import Header from "../../Header";
import Button from "../../Button";
import Section from "../../Section";
import BuildCard from "../../partials/BuildCard";

const build = {
  type: "error",
  number: 1363,
  title: "replace all `div` to `article`",
  branch: "master",
  hash: "952e5567",
  author: "Vadim Makeev"
};

const BuildPage = () => {
  return (
    <>
      <Header>
        <Header.BuildTitle>
          philip1967/my-awesome-repo-with-long-long-long-repo-name
        </Header.BuildTitle>
        <Header.BtnGroup>
          <Button type="iconText" tone="control" mix={["Header-Button"]}>
            <Button.Icon icon="rebuild" />
            <Button.Text>Rebuild</Button.Text>
          </Button>
          <Button type="icon" tone="control" mix={["Header-Button"]}>
            <Button.Icon icon="settings" />
          </Button>
        </Header.BtnGroup>
      </Header>
      <Section>
        <BuildCard build={build} view="high" timePosition="bottom" />
      </Section>
    </>
  );
};

export default BuildPage;
