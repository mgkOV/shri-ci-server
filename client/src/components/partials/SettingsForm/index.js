import React from "react";

import SectionHeading from "../../SectionHeading";
import Form from "../../Form";
import FieldSuite from "../../FieldSuite";
import Button from "../../Button";
import ButtonGroup from "../../ButtonGroup";

const SettingsForm = props => {
  return (
    <Form mix={["Section-Container"]}>
      <SectionHeading>
        <SectionHeading.Title>Settings</SectionHeading.Title>
        <SectionHeading.Subtitle>
          Configure repository connection and synchronization settings.
        </SectionHeading.Subtitle>
      </SectionHeading>
      <FieldSuite required>
        <FieldSuite.Label htmlFor="repository-name">GitHub repository</FieldSuite.Label>
        <FieldSuite.Input placeholder="user-name/repo-name" name="repository-name" />
      </FieldSuite>
      <FieldSuite>
        <FieldSuite.Label htmlFor="build-command">Build command</FieldSuite.Label>
        <FieldSuite.Input placeholder="npm run build" name="build-command" />
      </FieldSuite>
      <FieldSuite>
        <FieldSuite.Label htmlFor="main-branch">Main branch</FieldSuite.Label>
        <FieldSuite.Input placeholder="master" name="main-branch" />
      </FieldSuite>
      <FieldSuite hasHint>
        <FieldSuite.Label htmlFor="main-branch">Synchronize every</FieldSuite.Label>
        <FieldSuite.Input placeholder="10" name="main-branch" />
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

export default SettingsForm;
