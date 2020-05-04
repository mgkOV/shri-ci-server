import React from "react";

import "./Button-Icon.scss";

import { ReactComponent as SettingsIcon } from "./settings.svg";
import { ReactComponent as BuildIcon } from "./build.svg";
import { ReactComponent as RebuildIcon } from "./rebuild.svg";

export type ButtonIcon = React.FC<{
  icon: "settings" | "build" | "rebuild";
}>;

const ButtonIcon: ButtonIcon = ({ icon }) => {
  const renderIcon = () => {
    // This strange code is for SSR because SSR   isn't ok with Create React App svg import
    if (icon === "settings" && SettingsIcon) return <SettingsIcon />;
    if (icon === "build" && BuildIcon) return <BuildIcon />;
    if (icon === "rebuild" && RebuildIcon) return <RebuildIcon />;
  };
  return <span className="Button-Icon">{renderIcon()}</span>;
};

export default ButtonIcon;
