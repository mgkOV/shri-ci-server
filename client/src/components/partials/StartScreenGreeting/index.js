import React from "react";

import StartScreen from "../../StartScreen";
import Button from "../../Button";

const StartScreenGreeting = () => {
  return (
    <StartScreen>
      <StartScreen.Icon />
      <StartScreen.Title>
        Configure repository connection and synchronization settings
      </StartScreen.Title>
      <Button type="formControl" tone="action">
        <Button.Text>Open settings</Button.Text>
      </Button>
    </StartScreen>
  );
};

export default StartScreenGreeting;
