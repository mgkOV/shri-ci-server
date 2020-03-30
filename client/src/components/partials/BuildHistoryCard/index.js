import React from "react";
import PropTypes from "prop-types";

import Card from "../../Card";
import Status from "../../Status";
import Meta from "../../Meta";

const proptTypes = {
  build: PropTypes.shape({
    type: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    branch: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })
};

const BuildHistoryCard = ({ build }) => {
  return (
    <Card type={build.type} mix={["History-Item"]}>
      <Card.Content>
        <Status mix={["Card-Title"]}>
          <Status.Number view={build.type}>{"#" + build.number}</Status.Number>
          <Status.Comment>{build.title}</Status.Comment>
        </Status>
        <Card.Subtitle>
          <Meta mix={["Card-SubtitleItem"]}>
            <Meta.Icon icon="commit" />
            <Meta.Text>{build.branch}</Meta.Text>
            <Meta.Text secondary>{build.hash}</Meta.Text>
          </Meta>

          <Meta mix={["Card-SubtitleItem"]}>
            <Meta.Icon icon="user" />
            <Meta.Text>{build.author}</Meta.Text>
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
};

BuildHistoryCard.proptTypes = proptTypes;

export default BuildHistoryCard;