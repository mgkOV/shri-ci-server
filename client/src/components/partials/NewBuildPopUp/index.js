import React from "react";

import PopUp from "../../PopUp";
import FieldSuite from "../../FieldSuite";
import Button from "../../Button";
import ButtonGroup from "../../ButtonGroup";

const NewBuildPopUp = props => {
  return (
    <PopUp>
      <PopUp.Content>
        <PopUp.Title />
        <FieldSuite>
          <PopUp.Label htmlFor="new-build-popup">
            Enter the commit hash which you want to build.
          </PopUp.Label>
          <FieldSuite.Input placeholder="Commit hash" name="new-build-popup" />
        </FieldSuite>
        <ButtonGroup mix={["PopUp-BtnGroup"]}>
          <Button
            tone="action"
            type="formControl"
            mix={["ButtonGroup-Item"]}
            fullWidthAtSmallScreen
          >
            <Button.Text>Run build</Button.Text>
          </Button>
          <Button
            tone="control"
            type="formControl"
            mix={["ButtonGroup-Item"]}
            fullWidthAtSmallScreen
          >
            <Button.Text>Cancel</Button.Text>
          </Button>
        </ButtonGroup>
      </PopUp.Content>
    </PopUp>
  );
};

export default NewBuildPopUp;
