import React from "react";
import { ReactComponent as StartIcon } from "./start-icon.svg";

const StartScreenIcon: React.FC = () => (StartIcon ? <StartIcon /> : null);

export default StartScreenIcon;
