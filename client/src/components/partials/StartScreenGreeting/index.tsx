import React from "react";

import StartScreen from "../../StartScreen";
import Button from "../../Button";

type StartScreenGreeting = React.FC<{
  handleClick?(e: React.SyntheticEvent): void;
}>;

const StartScreenGreeting: StartScreenGreeting = ({ handleClick }) => {
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

export default StartScreenGreeting;
