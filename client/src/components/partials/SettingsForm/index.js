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
  selectIsSettingsPosting
} from "../../../redux/settings/settings.selectors";
import { postSettings } from "../../../redux/settings/settings.actions";

const SettingsForm = ({ settings, postSettings, isPosting }) => {
  const [repoName, setRepoName] = useState(settings.repoName);
  const [buildCommand, setBuildCommand] = useState(settings.buildCommand);
  const [mainBranch, setMainBranch] = useState(settings.mainBranch);
  const [period, setPeriod] = useState(String(settings.period));
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
    postSettings(
      {
        repoName,
        buildCommand,
        mainBranch,
        period: Number(period)
      },
      history
    );
  };

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
    </Form>
  );
};

const mapState = createStructuredSelector({
  settings: selectSettingsData,
  isPosting: selectIsSettingsPosting
});

export default connect(mapState, { postSettings })(SettingsForm);
