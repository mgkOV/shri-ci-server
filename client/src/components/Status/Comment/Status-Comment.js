import React from "react";
import PropTypes from "prop-types";

import "./Status-Comment.scss";

const propTypes = {
  children: PropTypes.string
};

const StatusComment = ({ children }) => {
  return <div className="Status-Comment">{children}</div>;
};

StatusComment.propTypes = {};

export default StatusComment;
