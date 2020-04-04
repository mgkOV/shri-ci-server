import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";

import Header from "../../../Header";
import Button from "../../../Button";
import Section from "../../../Section";
import Loader from "../../../Loader";

import NewBuildPopUp from "../../../partials/NewBuildPopUp";
import BuildHistory from "../../../partials/BuildHistory";
import { openPopUp } from "../../../../redux/popUp/popUp.actions";
import { getBuildList, clearBuildList } from "../../../../redux/builds/builds.actions";
import {
  selectAllBuilds,
  selectIsBuildListFetching
} from "../../../../redux/builds/builds.selectors";
import { selectSettingsData } from "../../../../redux/settings/settings.selectors";

const propTypes = {
  openPopUp: PropTypes.func, // redux
  getBuildList: PropTypes.func, // redux
  isFetching: PropTypes.bool, // redux
  clearBuildList: PropTypes.func //redux
};

const BuildHistroyPage = ({
  openPopUp,
  getBuildList,
  builds,
  settings,
  isFetching,
  clearBuildList
}) => {
  useEffect(() => {
    getBuildList(0);
    return clearBuildList;
  }, [getBuildList, clearBuildList]);

  const history = useHistory();

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
        {isFetching ? (
          <Loader />
        ) : (
          <Button
            type="text"
            tone="control"
            fullWidthAtSmallScreen
            onClick={() => getBuildList(builds.length)}
          >
            <Button.Text>Show more</Button.Text>
          </Button>
        )}
      </Section>
      <NewBuildPopUp />
    </>
  );
};

BuildHistroyPage.propTypes = propTypes;

const mapSate = createStructuredSelector({
  builds: selectAllBuilds,
  settings: selectSettingsData,
  isFetching: selectIsBuildListFetching
});

export default connect(mapSate, { openPopUp, getBuildList, clearBuildList })(BuildHistroyPage);
