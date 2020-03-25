import React, { Fragment } from "react";

import Header from "../../Header";
import Button, { ButtonIcon, ButtonText } from "../../Button";

const HomePage = () => {
  return (
    <Fragment>
      <Header>
        <Header.Title view="secondary">School CI server</Header.Title>
        <Header.BtnGroup>
          <Button type="iconText" tone="control" mix={["Header-Button"]}>
            <ButtonIcon icon="settings" />
            <ButtonText>Settings</ButtonText>
          </Button>
        </Header.BtnGroup>
      </Header>
    </Fragment>
  );
};

export default HomePage;
