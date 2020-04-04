import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";

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

const propTypes = {
  isShown: PropTypes.bool, //redux
  closePopUp: PropTypes.func, //redux
  postBuild: PropTypes.func, //redux
  isPosting: PropTypes.bool //redux
};

const NewBuildPopUp = ({ isShown, closePopUp, postBuild, isPosting }) => {
  const [hash, setHash] = useState("");
  const history = useHistory();
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

NewBuildPopUp.propTypes = propTypes;

const mapState = createStructuredSelector({
  isPosting: selectIsCurrentBuildFetching,
  isShown: selectIsPopUpShown
});

export default connect(mapState, { closePopUp, postBuild })(NewBuildPopUp);
