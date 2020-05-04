import React from "react";
import { History } from "history";

import Header from "../../../Header";
import Button from "../../../Button";
import Section from "../../../Section";
import StartScreenGreeting from "../../../partials/StartScreenGreeting";

type StartPage = React.FC<{
  history: History;
}>;

const StartPage: StartPage = ({ history }) => {
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

export default StartPage;
