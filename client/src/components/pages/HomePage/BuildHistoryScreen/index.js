import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "../../../Header";
import Button from "../../../Button";
import Section from "../../../Section";

import BuildHistory from "../../../partials/BuildHistory";
import { openPopUp } from "../../../../redux/popUp/popUp.actions";
import { getAllBuilds } from "../../../../redux/builds/builds.actions";

const propTypes = {
  history: PropTypes.object,
  openPopUp: PropTypes.func, // redux
  getAllBuilds: PropTypes.func // redux
};

const BuildHistroyPage = ({ history, openPopUp, getAllBuilds }) => {
  useEffect(() => {
    getAllBuilds();
  }, [getAllBuilds]);

  return (
    <>
      <Header>
        <Header.BuildTitle>
          philip1967/my-awesome-repo-with-long-long-long-repo-name
        </Header.BuildTitle>
        <Header.BtnGroup>
          <Button type="iconText" tone="control" mix={["Header-Button"]} onClick={openPopUp}>
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

export default connect(null, { openPopUp, getAllBuilds })(BuildHistroyPage);