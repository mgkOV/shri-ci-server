import React from "react";
import PropTypes from "prop-types";

import Header from "../../Header";
import Button from "../../Button";
import Section from "../../Section";
import StartScreenGreeting from "../../partials/StartScreenGreeting";

const propsTypes = {
  history: PropTypes.object //from react-router-dom
};

const HomePage = ({ history }) => {
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

HomePage.propsTypes = propsTypes;

export default HomePage;
