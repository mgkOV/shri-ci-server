import React from "react";
import PropTypes from "prop-types";

import Header from "../../../Header";
import Button from "../../../Button";
import Section from "../../../Section";
import StartScreenGreeting from "../../../partials/StartScreenGreeting";

const propsTypes = {
  history: PropTypes.object
};

const StartPage = ({ history }) => {
  return (
    <>
      <Header>
        <Header.Logo />
        <Header.BtnGroup>
          <Button
            type="iconText"
            tone="control"
            mix={["Header-Button"]}
            onClick={() => history.push("/settings")}
          >
            <Button.Icon icon="settings" />
            <Button.Text>Settings</Button.Text>
          </Button>
        </Header.BtnGroup>
      </Header>

      <Section mix={["App-Section"]}>
        <StartScreenGreeting handleClick={() => history.push("/settings")} />
      </Section>
    </>
  );
};

StartPage.propsTypes = propsTypes;

export default StartPage;
