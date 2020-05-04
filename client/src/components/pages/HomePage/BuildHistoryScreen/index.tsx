import React, { useEffect } from "react";
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
import {
  getBuildList,
  clearBuildList,
  getMoreBuilds,
} from "../../../../redux/builds/builds.actions";
import {
  selectAllBuilds,
  selectIsBuildListFetching,
} from "../../../../redux/builds/builds.selectors";
import { selectSettingsData } from "../../../../redux/settings/settings.selectors";

type BuildHistroyPage = React.FC<{
  openPopUp(): void;
  getBuildList(offset: number): void;
  builds: BuildShriApi[];
  settings: SettingsShriApi;
  isFetching: boolean;
  clearBuildList(): void;
  getMoreBuilds(offset: number): void;
}>;

const BuildHistroyPage: BuildHistroyPage = ({
  openPopUp,
  getBuildList,
  builds,
  settings,
  isFetching,
  clearBuildList,
  getMoreBuilds,
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
          <Button
            type="iconText"
            tone="control"
            mix={["Header-Button"]}
            onClick={openPopUp}
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
        <BuildHistory builds={builds} />
        {isFetching ? (
          <Loader />
        ) : (
          <Button
            type="text"
            tone="control"
            fullWidthAtSmallScreen
            onClick={() => getMoreBuilds(builds.length)}
          >
            <Button.Text>Show more</Button.Text>
          </Button>
        )}
      </Section>
      <NewBuildPopUp />
    </>
  );
};

const mapSate = createStructuredSelector({
  builds: selectAllBuilds,
  settings: selectSettingsData,
  isFetching: selectIsBuildListFetching,
});

export default connect(mapSate, {
  openPopUp,
  getBuildList,
  clearBuildList,
  getMoreBuilds,
})(BuildHistroyPage);
