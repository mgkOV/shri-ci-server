import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import History from "../../History";
import BuildCard from "../BuildCard";

const propTypes = {
  buids: PropTypes.array,
  history: PropTypes.object //from react-router-dom
};

const BuildHistory = ({ history, builds }) => {
  const renderBuilds = (builds) =>
    builds.map((b) => {
      return <BuildCard build={b} mix={["History-Item"]} key={b.id} history={history} />;
    });

  return <History>{renderBuilds(builds)}</History>;
};

BuildHistory.propTypes = propTypes;

export default withRouter(BuildHistory);
