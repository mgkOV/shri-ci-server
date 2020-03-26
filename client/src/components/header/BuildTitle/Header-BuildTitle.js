import React from "react";
import PropTypes from "prop-types";

import "./Header-BuildTitle.scss";

const propTypes = { children: PropTypes.string };

const HeaderTitle = ({ children }) => {
  return <h1 className="Header-BuildTitle">{children}</h1>;
};

HeaderTitle.propTypes = propTypes;

export default HeaderTitle;
