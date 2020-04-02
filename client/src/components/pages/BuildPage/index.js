import React from "react";
import PropTypes from "prop-types";

import Header from "../../Header";
import Button from "../../Button";
import Section from "../../Section";
import BuildCard from "../../partials/BuildCard";
import LogScreen from "../../LogScreen";

import { log } from "./log-seed.js";

const propTypes = {
  history: PropTypes.object //from react-router-dom
};

const build = {
  type: "error",
  number: 1363,
  title: "replace all `div` to `article`",
  branch: "master",
  hash: "952e5567",
  author: "Vadim Makeev",
  date: "21 янв, 03:06",
  duration: "1 ч 20 мин"
};

const BuildPage = ({ history }) => {
  return (
    <>
      <Header>
        <Header.BuildTitle>
          philip1967/my-awesome-repo-with-long-long-long-repo-name
        </Header.BuildTitle>
        <Header.BtnGroup>
          <Button
            type="iconText"
            tone="control"
            mix={["Header-Button"]}
            onClick={() => console.log("Rebuild")}
          >
            <Button.Icon icon="rebuild" />
            <Button.Text>Rebuild</Button.Text>
          </Button>
          <Button
            type="icon"
            tone="control"
            mix={["Header-Button"]}
            onClick={() => history.push("/settings")}
          >
            <Button.Icon icon="settings" />
          </Button>
        </Header.BtnGroup>
      </Header>

      <Section bottomSpace="no">
        <BuildCard build={build} view="high" timePosition="bottom" />
      </Section>
      <LogScreen log={log} />
    </>
  );
};

BuildPage.propTypes = propTypes;

export default BuildPage;
