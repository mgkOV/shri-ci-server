import React from "react";

import "./App.scss";

import Header from "../Header";
import Button, { ButtonIcon, ButtonText } from "../Button";

function App() {
  return (
    <div className="App">
      <Header>
        <h1 className="Header-Title Header-Title_view_secondary">School CI server</h1>
        <div className="Header-btnGroup">
          <Button type="iconText" tone="control">
            <ButtonIcon icon="settings" />
            <ButtonText>Settings</ButtonText>
          </Button>
        </div>
      </Header>
    </div>
  );
}

export default App;
