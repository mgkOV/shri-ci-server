import React from "react";
import PropTypes from "prop-types";
import { cn } from "@bem-react/classname";

import "./History.scss";

import data from "./data.json";

import Card from "../Card";
import Status from "../Status";
import Meta from "../Meta";

const propTypes = {
  // children: PropTypes.node.isRequired,
  mix: PropTypes.arrayOf(PropTypes.string)
};

const History = ({ mix }) => {
  const historyStyles = cn("History")(null, mix);
  const renderBuilds = builds =>
    builds.map(b => {
      return (
        <Card type={b.type} mix={["History-Item"]} key={b.number}>
          <Card.Content>
            <Status mix={["Card-Title"]}>
              <Status.Number view={b.type}>{"#" + b.number}</Status.Number>
              <Status.Comment>{b.title}</Status.Comment>
            </Status>
            <Card.Subtitle>
              <Meta mix={["Card-SubtitleItem"]}>
                <Meta.Icon icon="commit" />
                <Meta.Text>{b.branch}</Meta.Text>
                <Meta.Text secondary>{b.hash}</Meta.Text>
              </Meta>

              <Meta mix={["Card-SubtitleItem"]}>
                <Meta.Icon icon="user" />
                <Meta.Text>{b.author}</Meta.Text>
              </Meta>
            </Card.Subtitle>
          </Card.Content>

          <Card.Time>
            <Meta>
              <Meta.Icon icon="calendar" />
              <Meta.Text>21 янв, 03:06</Meta.Text>
            </Meta>

            <Meta>
              <Meta.Icon icon="stopwatch" />
              <Meta.Text>1 ч 20 мин</Meta.Text>
            </Meta>
          </Card.Time>
        </Card>
      );
    });

  return <div className={historyStyles}>{renderBuilds(data.history)}</div>;
};

History.propTypes = propTypes;

export default History;
