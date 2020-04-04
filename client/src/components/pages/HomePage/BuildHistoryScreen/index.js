import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "../../../Header";
import Button from "../../../Button";
import Section from "../../../Section";

import NewBuildPopUp from "../../../partials/NewBuildPopUp";
import BuildHistory from "../../../partials/BuildHistory";
import { openPopUp } from "../../../../redux/popUp/popUp.actions";
import { getBuildList } from "../../../../redux/builds/builds.actions";
import { selectAllBuilds } from "../../../../redux/builds/builds.selectors";
import { selectSettingsData } from "../../../../redux/settings/settings.selectors";

const propTypes = {
  history: PropTypes.object,
  openPopUp: PropTypes.func, // redux
  getBuildList: PropTypes.func // redux
};

const BuildHistroyPage = ({ history, openPopUp, getBuildList, builds, settings }) => {
  useEffect(() => {
    getBuildList();
  }, [getBuildList]);

  return (
    <>
      <Header>
        <Header.BuildTitle>{settings.repoName}</Header.BuildTitle>
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
        <BuildHistory builds={builds} />
        <Button
          type="text"
          tone="control"
          fullWidthAtSmallScreen
          onClick={() => console.log("Show more")}
        >
          <Button.Text>Show more</Button.Text>
        </Button>
      </Section>
      <NewBuildPopUp />
    </>
  );
};

BuildHistroyPage.propTypes = propTypes;

const mapSate = createStructuredSelector({
  builds: selectAllBuilds,
  settings: selectSettingsData
});

export default connect(mapSate, { openPopUp, getBuildList })(BuildHistroyPage);
