import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useParams, useHistory } from "react-router-dom";

import Header from "../../Header";
import Button from "../../Button";
import Section from "../../Section";
import BuildCard from "../../partials/BuildCard";
import LogScreen from "../../LogScreen";
import Loader from "../../Loader";
import { selectSettingsData } from "../../../redux/settings/settings.selectors";
import {
  selectCurrentBuild,
  selectIsCurrentBuildFetching
} from "../../../redux/builds/builds.selectors";
import { getCurrentBuild, clearCurrentBuild } from "../../../redux/builds/builds.actions";

import { log } from "./log-seed.js";

const propTypes = {
  settings: PropTypes.object, //redux
  build: PropTypes.object, //redux
  getCurrentBuild: PropTypes.func, //redux
  clearCurrentBuild: PropTypes.func //redux
};

const BuildPage = ({ settings, build, getCurrentBuild, isBuildFetching, clearCurrentBuild }) => {
  const { buildId } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (!build.id) {
      getCurrentBuild(buildId);
      return;
    }
    return clearCurrentBuild;
  }, [getCurrentBuild, clearCurrentBuild, buildId, build.id]);

  return (
    <>
      <Header>
        <Header.BuildTitle>{settings.repoName}</Header.BuildTitle>
        <Header.BtnGroup>
          <Button
            type="iconText"
            tone="control"
            mix={["Header-Button"]}
            onClick={() => console.log("Rebuild")}
          >
            <Button.Icon icon="rebuild" />
            <Button.Text>Rebuild</Button.Text>
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

      {isBuildFetching ? (
        <Section>
          <Loader />
        </Section>
      ) : (
        <>
          <Section bottomSpace="no">
            <BuildCard build={build} view="high" timePosition="bottom" />
          </Section>
          <LogScreen log={log} />
        </>
      )}
    </>
  );
};

BuildPage.propTypes = propTypes;

const mapSate = createStructuredSelector({
  settings: selectSettingsData,
  build: selectCurrentBuild,
  isBuildFetching: selectIsCurrentBuildFetching
});

export default connect(mapSate, { getCurrentBuild, clearCurrentBuild })(BuildPage);
