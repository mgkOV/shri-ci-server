import React from "react";
import PropTypes from "prop-types";

import "./Button-Icon.scss";

import { ReactComponent as SettingsIcon } from "./settings.svg";
import { ReactComponent as BuildIcon } from "./build.svg";
import { ReactComponent as RebuildIcon } from "./rebuild.svg";

const propTypes = {
  icon: PropTypes.oneOf(["settings", "build", "rebuild"])
};

const ButtonIcon = ({ icon }) => {
  const renderIcon = () => {
    if (icon === "settings") return <SettingsIcon />;
    if (icon === "build") return <BuildIcon />;
    if (icon === "rebuild") return <RebuildIcon />;
  };
  return <span className="Button-Icon">{renderIcon()}</span>;
};

ButtonIcon.propTypes = propTypes;

export default ButtonIcon;
