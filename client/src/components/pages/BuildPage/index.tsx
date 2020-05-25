import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useParams, useHistory } from "react-router-dom";

import Header from "../../Header";
import Button from "../../Button";
import Section from "../../Section";
import BuildCard from "../../partials/BuildCard";
import BuildLogs from "../../partials/BuildLogs";

import Loader from "../../Loader";
import { selectSettingsData } from "../../../redux/settings/settings.selectors";
import {
  selectCurrentBuild,
  selectIsCurrentBuildFetching,
} from "../../../redux/builds/builds.selectors";
import {
  getCurrentBuild,
  clearCurrentBuild,
  postBuild,
} from "../../../redux/builds/builds.actions";
import { selectTextData } from "../../../redux/text/text.selectors";

interface BuildPageProps {
  settings: SettingsShriApi;
  build: BuildShriApi;
  getCurrentBuild(id: string | undefined): void;
  isBuildFetching: Boolean;
  postBuild(commitHash: string, history: object): void;
  clearCurrentBuild(): void;
  text: TextData;
}

const BuildPage: React.FC<BuildPageProps> = ({
  settings,
  build,
  getCurrentBuild,
  isBuildFetching,
  clearCurrentBuild,
  postBuild,
  text,
}) => {
  const { buildId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getCurrentBuild(buildId);
  }, [getCurrentBuild, buildId]);

  useEffect(() => clearCurrentBuild, [clearCurrentBuild]);

  return (
    <>
      <Header>
        <Header.BuildTitle>{settings.repoName}</Header.BuildTitle>
        <Header.BtnGroup>
          {build.commitHash && (
            <Button
              type="iconText"
              tone="control"
              mix={["Header-Button"]}
              onClick={() => postBuild(build.commitHash, history)}
            >
              <Button.Icon icon="rebuild" />
              <Button.Text>{text["18"]}</Button.Text>
            </Button>
          )}
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
          <BuildLogs buildId={build.id} status={build.status} />
        </>
      )}
    </>
  );
};

const mapSate = createStructuredSelector({
  settings: selectSettingsData,
  build: selectCurrentBuild,
  isBuildFetching: selectIsCurrentBuildFetching,
  text: selectTextData,
});

export default connect(mapSate, { getCurrentBuild, clearCurrentBuild, postBuild })(
  BuildPage
);
