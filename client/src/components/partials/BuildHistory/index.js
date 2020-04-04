import React from "react";
import PropTypes from "prop-types";

import History from "../../History";
import BuildCard from "../BuildCard";

const propTypes = {
  buids: PropTypes.array
};

const BuildHistory = ({ history, builds }) => {
  const renderBuilds = (builds) =>
    builds.map((b) => {
      return <BuildCard build={b} mix={["History-Item"]} key={b.id} />;
    });

  return <History>{renderBuilds(builds)}</History>;
};

BuildHistory.propTypes = propTypes;

export default BuildHistory;
