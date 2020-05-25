import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { History } from "history";

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
import { selectTextData } from "../../../redux/text/text.selectors";

type NewBuildPopUp = React.FC<{
  isShown: boolean;
  closePopUp(): void;
  postBuild(trimmedHash: string, history: History): void;
  isPosting: boolean;
  text: TextData;
}>;

const NewBuildPopUp: NewBuildPopUp = ({
  isShown,
  closePopUp,
  postBuild,
  isPosting,
  text,
}) => {
  const [hash, setHash] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();
  if (!isShown) return null;
  if (isPosting)
    return (
      <PopUp>
        <Loader />
      </PopUp>
    );

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const trimmedHash = hash.trim();

    if (trimmedHash.length < 7) {
      setError(true);
      return;
    }

    postBuild(trimmedHash, history);
    setHash("");
  };

  const handleClose = () => {
    setError(false);
    setHash("");
    closePopUp();
  };

  const errorMessage = text["21"];

  return (
    <PopUp>
      <PopUp.Content>
        <PopUp.Title>{text["16"]}</PopUp.Title>
        <Form handleSubmit={handleSubmit}>
          <FieldSuite error={error}>
            <PopUp.Label htmlFor="new-build-popup">{text["17"]}</PopUp.Label>
            <FieldSuite.Input
              placeholder="Commit hash"
              name="new-build-popup"
              value={hash}
              handleChange={setHash}
            />
            {error && <FieldSuite.ErrorMessage>{errorMessage}</FieldSuite.ErrorMessage>}
          </FieldSuite>
          <ButtonGroup mix={["PopUp-BtnGroup"]}>
            <Button
              tone="action"
              type="formControl"
              mix={["ButtonGroup-Item"]}
              fullWidthAtSmallScreen
              btnType="submit"
            >
              <Button.Text>{text["14"]}</Button.Text>
            </Button>
            <Button
              tone="control"
              type="formControl"
              mix={["ButtonGroup-Item"]}
              fullWidthAtSmallScreen
              onClick={handleClose}
            >
              <Button.Text>{text["12"]}</Button.Text>
            </Button>
          </ButtonGroup>
        </Form>
      </PopUp.Content>
    </PopUp>
  );
};

const mapState = createStructuredSelector({
  isPosting: selectIsCurrentBuildFetching,
  isShown: selectIsPopUpShown,
  text: selectTextData,
});

export default connect(mapState, { closePopUp, postBuild })(NewBuildPopUp);
