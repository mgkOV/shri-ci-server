import React from "react";

import StartScreen from "../../StartScreen";
import Button from "../../Button";

type StartScreenGreeting = React.FC<{
  handleClick?(e: React.SyntheticEvent): void;
  text: TextData;
}>;

const StartScreenGreeting: StartScreenGreeting = ({ handleClick, text }) => {
  return (
    <StartScreen>
      <StartScreen.Icon />
      <StartScreen.Title>{text["02"]}</StartScreen.Title>
      <Button type="formControl" tone="action" onClick={handleClick}>
        <Button.Text>{text["03"]}</Button.Text>
      </Button>
    </StartScreen>
  );
};

export default StartScreenGreeting;
