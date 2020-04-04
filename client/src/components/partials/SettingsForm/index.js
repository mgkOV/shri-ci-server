import React, { useState } from "react";
import { connect } from "react-redux";

import SectionHeading from "../../SectionHeading";
import Form from "../../Form";
import FieldSuite from "../../FieldSuite";
import Button from "../../Button";
import ButtonGroup from "../../ButtonGroup";
import { selectSettingsData } from "../../../redux/settings/settings.selectors";

const SettingsForm = ({ settings }) => {
  const [repoName, setRepoName] = useState(settings.repoName);
  const [buildCommand, setBuildCommand] = useState(settings.buildCommand);
  const [mainBranch, setMainBranch] = useState(settings.mainBranch);
  const [period, setPeriod] = useState(settings.period);

  return (
    <Form mix={["Section-Container"]} handleSubmit={() => console.log("submit")}>
      <SectionHeading>
        <SectionHeading.Title>Settings</SectionHeading.Title>
        <SectionHeading.Subtitle>
          Configure repository connection and synchronization settings.
        </SectionHeading.Subtitle>
      </SectionHeading>
      <FieldSuite required>
        <FieldSuite.Label htmlFor="repository-name">GitHub repository</FieldSuite.Label>
        <FieldSuite.Input
          placeholder="user-name/repo-name"
          name="repository-name"
          value={repoName}
          handleChange={setRepoName}
        />
      </FieldSuite>
      <FieldSuite required>
        <FieldSuite.Label htmlFor="build-command">Build command</FieldSuite.Label>
        <FieldSuite.Input
          placeholder="npm run build"
          name="build-command"
          value={buildCommand}
          handleChange={setBuildCommand}
        />
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
        <FieldSuite.Input placeholder="10" name="period" value={period} handleChange={setPeriod} />
        <FieldSuite.Hint>minutes</FieldSuite.Hint>
      </FieldSuite>
      <ButtonGroup mix={["Form-BtnGroup"]}>
        <Button
          tone="action"
          type="formControl"
          mix={["ButtonGroup-Item"]}
          fullWidthAtSmallScreen
          onClick={() => console.log("Save")}
        >
          <Button.Text>Save</Button.Text>
        </Button>
        <Button
          tone="control"
          type="formControl"
          mix={["ButtonGroup-Item"]}
          fullWidthAtSmallScreen
          onClick={() => console.log("Cancel")}
        >
          <Button.Text>Cancel</Button.Text>
        </Button>
      </ButtonGroup>
    </Form>
  );
};

const mapState = (state) => ({
  settings: selectSettingsData(state)
});

export default connect(mapState)(SettingsForm);
