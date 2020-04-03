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
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired
  }).isRequired,
  timePosition: PropTypes.oneOf(["bottom"]),
  view: PropTypes.oneOf(["high"]),
  mix: PropTypes.arrayOf(PropTypes.string),
  history: PropTypes.object
};

const BuildCard = ({ build, timePosition, view, mix, history }) => {
  return (
    <Card
      type={build.status.toLowerCase()}
      mix={mix}
      view={view}
      onClick={history ? () => history.push(`/build/${build.buildNumber}`) : undefined}
    >
      <Card.Content>
        <Status mix={["Card-Title"]}>
          <Status.Number view={build.status.toLowerCase()}>{"#" + build.buildNumber}</Status.Number>
          <Status.Comment>{build.commitMessage}</Status.Comment>
        </Status>
        <Card.Subtitle>
          <Meta mix={["Card-SubtitleItem"]}>
            <Meta.Icon icon="commit" />
            <Meta.Text>{build.branchName}</Meta.Text>
            <Meta.Text secondary>{build.commitHash.substring(0, 8)}</Meta.Text>
          </Meta>

          <Meta mix={["Card-SubtitleItem"]}>
            <Meta.Icon icon="user" />
            <Meta.Text>{build.authorName}</Meta.Text>
          </Meta>
        </Card.Subtitle>
      </Card.Content>

      <Card.Time position={timePosition}>
        <Meta>
          <Meta.Icon icon="calendar" />
          <Meta.Text>{build.start}</Meta.Text>
        </Meta>

        <Meta>
          <Meta.Icon icon="stopwatch" />
          <Meta.Text>{build.duration}</Meta.Text>
        </Meta>
      </Card.Time>
    </Card>
  );
};

BuildCard.proptTypes = proptTypes;

export default BuildCard;
