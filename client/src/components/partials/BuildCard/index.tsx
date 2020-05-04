import React from "react";
import { ClassNameList } from "@bem-react/classname";
import { History } from "history";

import Card from "../../Card";
import Status from "../../Status";
import Meta from "../../Meta";

type BuildCard = React.FC<{
  build: BuildShriApi;
  timePosition?: "bottom";
  mix?: ClassNameList;
  view?: "high";
  history?: History;
}>;

const BuildCard: BuildCard = ({ build, timePosition, view, mix, history }) => {
  type statusMap = {
    [k: string]: "waiting" | "success" | "error";
  };

  const statusMap: statusMap = {
    Waiting: "waiting",
    InProgress: "waiting",
    Success: "success",
    Fail: "error",
    Canceled: "error",
  };

  const shortenHash = build.commitHash && build.commitHash.substring(0, 8);

  const cardStatus = statusMap[build.status];

  return (
    <Card
      type={cardStatus}
      mix={mix}
      view={view}
      onClick={history ? () => history.push(`/build/${build.id}`) : undefined}
    >
      <Card.Content>
        <Status mix={["Card-Title"]}>
          <Status.Number view={cardStatus}>{"#" + build.buildNumber}</Status.Number>
          <Status.Comment>{build.commitMessage}</Status.Comment>
        </Status>
        <Card.Subtitle>
          <Meta mix={["Card-SubtitleItem"]}>
            <Meta.Icon icon="commit" />
            <Meta.Text>{build.branchName}</Meta.Text>
            <Meta.Text secondary>{shortenHash}</Meta.Text>
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

export default BuildCard;
