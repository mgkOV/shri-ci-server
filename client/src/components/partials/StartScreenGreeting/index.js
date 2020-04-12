import React from "react";
import PropTypes from "prop-types";

import StartScreen from "../../StartScreen";
import Button from "../../Button";

const propTypes = {
  handleClick: PropTypes.func
};

const StartScreenGreeting = ({ handleClick }) => {
  return (
    <StartScreen>
      <StartScreen.Icon />
      <StartScreen.Title>
        Configure repository connection and synchronization settings
      </StartScreen.Title>
      <Button type="formControl" tone="action" onClick={handleClick}>
        <Button.Text>Open settings</Button.Text>
      </Button>
    </StartScreen>
  );
};

StartScreenGreeting.propTypes = propTypes;

export default StartScreenGreeting;
