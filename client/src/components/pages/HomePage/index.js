import React, { Fragment } from "react";

import Header from "../../Header";
import Button, { ButtonIcon, ButtonText } from "../../Button";

const HomePage = () => {
  return (
    <Fragment>
      <Header>
        <h1 className="Header-Title Header-Title_view_secondary">School CI server</h1>
        <div className="Header-btnGroup">
          <Button type="iconText" tone="control">
            <ButtonIcon icon="settings" />
            <ButtonText>Settings</ButtonText>
          </Button>
        </div>
      </Header>
    </Fragment>
  );
};

export default HomePage;
