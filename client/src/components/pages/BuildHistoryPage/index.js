import React from "react";
import PropTypes from "prop-types";

import Header from "../../Header";
import Button from "../../Button";
import Section from "../../Section";

import BuildHistory from "../../partials/BuildHistory";

const propTypes = {
  history: PropTypes.object // from react-router-dom
};

const BuildHistroyPage = ({ history }) => {
  return (
    <>
      <Header>
        <Header.BuildTitle>
          philip1967/my-awesome-repo-with-long-long-long-repo-name
        </Header.BuildTitle>
        <Header.BtnGroup>
          <Button
            type="iconText"
            tone="control"
            mix={["Header-Button"]}
            onClick={() => console.log("Run Build")}
          >
            <Button.Icon icon="build" />
            <Button.Text>Run build</Button.Text>
          </Button>
          <Button
            type="icon"
            tone="control"
            mix={["Header-Button"]}
            onClick={() => history.push("/settings")}
          >
            <Button.Icon icon="settings" />
          </Button>
        </Header.BtnGroup>
      </Header>

      <Section>
        <BuildHistory />
        <Button
          type="text"
          tone="control"
          fullWidthAtSmallScreen
          onClick={() => console.log("Show more")}
        >
          <Button.Text>Show more</Button.Text>
        </Button>
      </Section>
    </>
  );
};

BuildHistroyPage.propTypes = propTypes;

export default BuildHistroyPage;
