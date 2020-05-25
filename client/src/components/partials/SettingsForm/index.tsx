import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { History } from "history";

import SectionHeading from "../../SectionHeading";
import Form from "../../Form";
import FieldSuite from "../../FieldSuite";
import Button from "../../Button";
import ButtonGroup from "../../ButtonGroup";
import {
  selectSettingsData,
  selectIsSettingsPosting,
  selectPostSettingError,
} from "../../../redux/settings/settings.selectors";
import { postSettings } from "../../../redux/settings/settings.actions";
import { selectTextData } from "../../../redux/text/text.selectors";

type SettingsForm = React.FC<{
  settings: SettingsShriApi;
  postSettings(settings: ConfigSchema, history: History): void;
  isPosting: boolean;
  postError: string;
  text: TextData;
}>;

const SettingsForm: SettingsForm = ({
  settings,
  postSettings,
  isPosting,
  postError,
  text,
}) => {
  const [repoName, setRepoName] = useState(settings.repoName ? settings.repoName : "");
  const [buildCommand, setBuildCommand] = useState(
    settings.buildCommand ? settings.buildCommand : ""
  );
  const [mainBranch, setMainBranch] = useState(
    settings.mainBranch ? settings.mainBranch : ""
  );
  const [period, setPeriod] = useState(settings.period ? String(settings.period) : "");
  const [repoNameError, setRepoNameError] = useState(false);
  const [buildCommandError, setBuildCommandError] = useState(false);

  const history = useHistory();

  const errorMessage = text["19"];

  const handleChangePeriod = (value: string) => {
    if (!value.match(/^[0-9]*$/)) return;
    setPeriod(value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
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
        period: Number(period),
      },
      history
    );
  };

  const postErrorMasage = text["20"];

  return (
    <Form mix={["Section-Container"]} handleSubmit={handleSubmit}>
      <SectionHeading>
        <SectionHeading.Title>{text["01"]}</SectionHeading.Title>
        <SectionHeading.Subtitle>{text["02"]}.</SectionHeading.Subtitle>
      </SectionHeading>
      <FieldSuite required error={repoNameError}>
        <FieldSuite.Label htmlFor="repository-name">{text["07"]}</FieldSuite.Label>
        <FieldSuite.Input
          placeholder="user-name/repo-name"
          name="repository-name"
          value={repoName}
          handleChange={setRepoName}
        />
        {repoNameError && (
          <FieldSuite.ErrorMessage>{errorMessage}</FieldSuite.ErrorMessage>
        )}
      </FieldSuite>
      <FieldSuite required error={buildCommandError}>
        <FieldSuite.Label htmlFor="build-command">{text["08"]}</FieldSuite.Label>
        <FieldSuite.Input
          placeholder="npm run build"
          name="build-command"
          value={buildCommand}
          handleChange={setBuildCommand}
        />
        {buildCommandError && (
          <FieldSuite.ErrorMessage>{errorMessage}</FieldSuite.ErrorMessage>
        )}
      </FieldSuite>
      <FieldSuite>
        <FieldSuite.Label htmlFor="main-branch">{text["09"]}</FieldSuite.Label>
        <FieldSuite.Input
          placeholder="master"
          name="main-branch"
          value={mainBranch}
          handleChange={setMainBranch}
        />
      </FieldSuite>
      <FieldSuite hasHint>
        <FieldSuite.Label htmlFor="period">
          {text["10"] && text["10"].split("{{ph}}")[0]}
        </FieldSuite.Label>
        <FieldSuite.Input
          placeholder="10"
          name="period"
          value={period}
          handleChange={handleChangePeriod}
        />
        <FieldSuite.Hint>{text["10"] && text["10"].split("{{ph}}")[1]}</FieldSuite.Hint>
      </FieldSuite>
      <ButtonGroup mix={["Form-BtnGroup"]}>
        <Button
          tone={isPosting ? "disabled" : "action"}
          type="formControl"
          mix={["ButtonGroup-Item"]}
          fullWidthAtSmallScreen
          btnType="submit"
        >
          <Button.Text>{text["11"]}</Button.Text>
        </Button>
        <Button
          tone={isPosting ? "disabled" : "control"}
          type="formControl"
          mix={["ButtonGroup-Item"]}
          fullWidthAtSmallScreen
          onClick={history.goBack}
        >
          <Button.Text>{text["12"]}</Button.Text>
        </Button>
      </ButtonGroup>
      {!!postError && <Form.Error>{postErrorMasage}</Form.Error>}
    </Form>
  );
};

const mapState = createStructuredSelector({
  settings: selectSettingsData,
  isPosting: selectIsSettingsPosting,
  postError: selectPostSettingError,
  text: selectTextData,
});

export default connect(mapState, { postSettings })(SettingsForm);
