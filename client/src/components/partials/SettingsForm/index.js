import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import SectionHeading from "../../SectionHeading";
import Form from "../../Form";
import FieldSuite from "../../FieldSuite";
import Button from "../../Button";
import ButtonGroup from "../../ButtonGroup";
import {
  selectSettingsData,
  selectIsSettingsPosting,
  selectPostSettingError
} from "../../../redux/settings/settings.selectors";
import { postSettings } from "../../../redux/settings/settings.actions";

const SettingsForm = ({ settings, postSettings, isPosting, postError }) => {
  const [repoName, setRepoName] = useState(settings.repoName ? settings.repoName : "");
  const [buildCommand, setBuildCommand] = useState(
    settings.buildCommand ? settings.buildCommand : ""
  );
  const [mainBranch, setMainBranch] = useState(settings.mainBranch ? settings.mainBranch : "");
  const [period, setPeriod] = useState(settings.period ? String(settings.period) : "");
  const [repoNameError, setRepoNameError] = useState(false);
  const [buildCommandError, setBuildCommandError] = useState(false);

  const history = useHistory();

  const errorMessage = "Form field is required";

  const handleChangePeriod = (value) => {
    if (!value.match(/^[0-9]*$/)) return;
    setPeriod(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedRepoName = repoName.trim();
    const trimmedBuildCommand = buildCommand.trim();
    let trimmedMainBranch = mainBranch.trim();
    let stopSubmit = false;

    if (trimmedRepoName === "") {
      setRepoNameError(true);
      stopSubmit = true;
    }

    if (trimmedBuildCommand === "") {
      setBuildCommandError(true);
      stopSubmit = true;
    }

    if (stopSubmit) return;

    if (trimmedMainBranch === "") {
      trimmedMainBranch = "master";
    }

    postSettings(
      {
        repoName: trimmedRepoName,
        buildCommand: trimmedBuildCommand,
        mainBranch: trimmedMainBranch,
        period: Number(period)
      },
      history
    );
  };

  const postErrorMasage = "ERROR: Error cloning repo.";

  return (
    <Form mix={["Section-Container"]} handleSubmit={handleSubmit}>
      <SectionHeading>
        <SectionHeading.Title>Settings</SectionHeading.Title>
        <SectionHeading.Subtitle>
          Configure repository connection and synchronization settings.
        </SectionHeading.Subtitle>
      </SectionHeading>
      <FieldSuite required error={repoNameError}>
        <FieldSuite.Label htmlFor="repository-name">GitHub repository</FieldSuite.Label>
        <FieldSuite.Input
          placeholder="user-name/repo-name"
          name="repository-name"
          value={repoName}
          handleChange={setRepoName}
        />
        {repoNameError && <FieldSuite.ErrorMessage>{errorMessage}</FieldSuite.ErrorMessage>}
      </FieldSuite>
      <FieldSuite required error={buildCommandError}>
        <FieldSuite.Label htmlFor="build-command">Build command</FieldSuite.Label>
        <FieldSuite.Input
          placeholder="npm run build"
          name="build-command"
          value={buildCommand}
          handleChange={setBuildCommand}
        />
        {buildCommandError && <FieldSuite.ErrorMessage>{errorMessage}</FieldSuite.ErrorMessage>}
      </FieldSuite>
      <FieldSuite>
        <FieldSuite.Label htmlFor="main-branch">Main branch</FieldSuite.Label>
        <FieldSuite.Input
          placeholder="master"
          name="main-branch"
          value={mainBranch}
          handleChange={setMainBranch}
        />
      </FieldSuite>
      <FieldSuite hasHint>
        <FieldSuite.Label htmlFor="period">Synchronize every</FieldSuite.Label>
        <FieldSuite.Input
          placeholder="10"
          name="period"
          value={period}
          handleChange={handleChangePeriod}
        />
        <FieldSuite.Hint>minutes</FieldSuite.Hint>
      </FieldSuite>
      <ButtonGroup mix={["Form-BtnGroup"]}>
        <Button
          tone={isPosting ? "disabled" : "action"}
          type="formControl"
          mix={["ButtonGroup-Item"]}
          fullWidthAtSmallScreen
          btnType="submit"
        >
          <Button.Text>Save</Button.Text>
        </Button>
        <Button
          tone={isPosting ? "disabled" : "control"}
          type="formControl"
          mix={["ButtonGroup-Item"]}
          fullWidthAtSmallScreen
          onClick={history.goBack}
        >
          <Button.Text>Cancel</Button.Text>
        </Button>
      </ButtonGroup>
      {!!postError && <Form.Error>{postErrorMasage}</Form.Error>}
    </Form>
  );
};

const mapState = createStructuredSelector({
  settings: selectSettingsData,
  isPosting: selectIsSettingsPosting,
  postError: selectPostSettingError
});

export default connect(mapState, { postSettings })(SettingsForm);
