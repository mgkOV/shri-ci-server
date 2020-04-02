import React from "react";
import { connect } from "react-redux";

import PopUp from "../../PopUp";
import FieldSuite from "../../FieldSuite";
import Button from "../../Button";
import ButtonGroup from "../../ButtonGroup";
import { closePopUp } from "../../../redux/popUp/popUp.actions";

const NewBuildPopUp = ({ popUp, closePopUp }) => {
  if (!popUp.show) return null;

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
            onClick={() => {
              console.log("Run");
            }}
          >
            <Button.Text>Run build</Button.Text>
          </Button>
          <Button
            tone="control"
            type="formControl"
            mix={["ButtonGroup-Item"]}
            fullWidthAtSmallScreen
            onClick={closePopUp}
          >
            <Button.Text>Cancel</Button.Text>
          </Button>
        </ButtonGroup>
      </PopUp.Content>
    </PopUp>
  );
};

const mapState = ({ popUp }) => ({ popUp });

export default connect(mapState, { closePopUp })(NewBuildPopUp);
