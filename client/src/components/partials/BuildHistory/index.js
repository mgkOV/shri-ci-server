import React from "react";
import PropTypes from "prop-types";

import History from "../../History";
import BuildHistoryCard from "../BuildHistoryCard";

import data from "./data.json";

const propTypes = {
  buids: PropTypes.array
};

const BuildHistory = props => {
  const renderBuilds = builds =>
    builds.map(b => {
      return <BuildHistoryCard build={b} key={b.number} />;
    });

  return <History>{renderBuilds(data.history)}</History>;
};

BuildHistory.propTypes = propTypes;

export default BuildHistory;