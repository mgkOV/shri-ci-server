import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import HomePage from "../pages/HomePage";
import SettingsPage from "../pages/SettingsPage";
import BuildHistoryPage from "../pages/BuildHistoryPage";

import Footer from "../Footer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/settings" component={SettingsPage} />
        <Route exact path="/history" component={BuildHistoryPage} />
      </Switch>
      <Footer mix={["App-Footer"]}>
        <Footer.LinkGroup>
          <Footer.Link to="/support">Support</Footer.Link>
          <Footer.Link to="/learning">Learning</Footer.Link>
        </Footer.LinkGroup>
        <Footer.Copyright>© 2020 Your Name</Footer.Copyright>
      </Footer>
    </div>
  );
}

export default App;
