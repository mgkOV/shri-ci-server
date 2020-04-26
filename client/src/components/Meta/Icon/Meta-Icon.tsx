import React from "react";

import "./Meta-Icon.scss";

import { ReactComponent as CalendarIcon } from "./calendar.svg";
import { ReactComponent as UserIcon } from "./user.svg";
import { ReactComponent as StopwatchIcon } from "./stopwatch.svg";
import { ReactComponent as CommitIcon } from "./commit.svg";

type MetaIcon = React.FC<{
  icon: "calendar" | "commit" | "stopwatch" | "user";
}>;

const MetaIcon: MetaIcon = ({ icon }) => {
  const renderIcon = () => {
    if (icon === "calendar" && CalendarIcon) return <CalendarIcon />;
    if (icon === "commit" && CommitIcon) return <CommitIcon />;
    if (icon === "stopwatch" && StopwatchIcon) return <StopwatchIcon />;
    if (icon === "user" && UserIcon) return <UserIcon />;
  };
  return <div className="Meta-Icon">{renderIcon()}</div>;
};

export default MetaIcon;
