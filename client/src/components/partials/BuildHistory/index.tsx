import React from "react";
import { useHistory } from "react-router-dom";

import History from "../../History";
import BuildCard from "../BuildCard";

type BuildHistory = React.FC<{
  builds: BuildShriApi[];
}>;

const BuildHistory: BuildHistory = ({ builds }) => {
  const history = useHistory();

  const renderBuilds = (builds: BuildShriApi[]) =>
    builds.map((b) => {
      return <BuildCard build={b} mix={["History-Item"]} key={b.id} history={history} />;
    });

  return <History>{renderBuilds(builds)}</History>;
};

export default BuildHistory;
