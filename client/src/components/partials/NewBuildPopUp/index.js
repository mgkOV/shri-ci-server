import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import PopUp from "../../PopUp";
import FieldSuite from "../../FieldSuite";
import Button from "../../Button";
import Form from "../../Form";
import Loader from "../../Loader";
import ButtonGroup from "../../ButtonGroup";
import { closePopUp } from "../../../redux/popUp/popUp.actions";
import { postBuild } from "../../../redux/builds/builds.actions";
import { selectIsCurrentBuildFetching } from "../../../redux/builds/builds.selectors";
import { selectIsPopUpShown } from "../../../redux/popUp/popUp.selectors";

const NewBuildPopUp = ({ isShown, closePopUp, postBuild, history, isPosting }) => {
  const [hash, setHash] = useState("");
  if (!isShown) return null;
  if (isPosting)
    return (
      <PopUp>
        <Loader view="popUp" />
      </PopUp>
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    postBuild(hash.trim(), history);
    setHash("");
  };

  return (
    <PopUp>
      <PopUp.Content>
        <PopUp.Title />
        <Form handleSubmit={handleSubmit}>
          <FieldSuite>
            <PopUp.Label htmlFor="new-build-popup">
              Enter the commit hash which you want to build.
            </PopUp.Label>
            <FieldSuite.Input
              placeholder="Commit hash"
              name="new-build-popup"
              value={hash}
              handleChange={setHash}
            />
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
              btnType="submit"
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
        </Form>
      </PopUp.Content>
    </PopUp>
  );
};

const mapState = createStructuredSelector({
  isPosting: selectIsCurrentBuildFetching,
  isShown: selectIsPopUpShown
});

const NewBuildPopUpConnected = connect(mapState, { closePopUp, postBuild })(NewBuildPopUp);

export default withRouter(NewBuildPopUpConnected);
