import React from "react";
import PropTypes from "prop-types";

import History from "../../History";
import BuildCard from "../BuildCard";

import data from "./data.json";

const propTypes = {
  buids: PropTypes.array
};

const BuildHistory = props => {
  const renderBuilds = builds =>
    builds.map(b => {
      return <BuildCard build={b} mix={["History-Item"]} key={b.number} />;
    });

  return <History>{renderBuilds(data.history)}</History>;
};

BuildHistory.propTypes = propTypes;

export default BuildHistory;
