import React from "react";
import PropTypes from "prop-types";

import "./Meta-Icon.scss";

import { ReactComponent as CalendarIcon } from "./calendar.svg";
import { ReactComponent as UserIcon } from "./user.svg";
import { ReactComponent as StopwatchIcon } from "./stopwatch.svg";
import { ReactComponent as CommitIcon } from "./commit.svg";

const propTypes = {
  icon: PropTypes.oneOf(["calendar", "commit", "stopwatch", "user"])
};

const MetaIcon = ({ icon }) => {
  const renderIcon = (icon) => {
    if (icon === "calendar" && CalendarIcon) return <CalendarIcon />;
    if (icon === "commit" && CommitIcon) return <CommitIcon />;
    if (icon === "stopwatch" && StopwatchIcon) return <StopwatchIcon />;
    if (icon === "user" && UserIcon) return <UserIcon />;
  };
  return <div className="Meta-Icon">{renderIcon(icon)}</div>;
};

MetaIcon.propTypes = propTypes;

export default MetaIcon;
