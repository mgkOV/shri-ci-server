import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import HomePage from "../pages/HomePage";
import SettingsPage from "../pages/SettingsPage";
import BuildHistoryPage from "../pages/BuildHistoryPage";
import BuildPage from "../pages/BuildPage";

import PopUp from "../PopUp";
import FieldSuite from "../FieldSuite";
import Footer from "../Footer";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/settings" component={SettingsPage} />
        <Route exact path="/history" component={BuildHistoryPage} />
        <Route path="/build/:id" component={BuildPage} />
      </Switch>
      <Footer mix={["App-Footer"]}>
        <Footer.LinkGroup>
          <Footer.Link to="/support">Support</Footer.Link>
          <Footer.Link to="/learning">Learning</Footer.Link>
        </Footer.LinkGroup>
        <Footer.Copyright>© 2020 Your Name</Footer.Copyright>
      </Footer>

      <PopUp>
        <PopUp.Content>
          <PopUp.Title />
          <FieldSuite>
            <PopUp.Label htmlFor="new-build-popup">
              Enter the commit hash which you want to build.
            </PopUp.Label>
            <FieldSuite.Input placeholder="Commit hash" name="new-build-popup" />
          </FieldSuite>
          <ButtonGroup mix={["PopUp-BtnGroup"]}>
            <Button
              tone="action"
              type="formControl"
              mix={["ButtonGroup-Item"]}
              fullWidthAtSmallScreen
            >
              <Button.Text>Run build</Button.Text>
            </Button>
            <Button
              tone="control"
              type="formControl"
              mix={["ButtonGroup-Item"]}
              fullWidthAtSmallScreen
            >
              <Button.Text>Cancel</Button.Text>
            </Button>
          </ButtonGroup>
        </PopUp.Content>
      </PopUp>
    </div>
  );
}

export default App;
