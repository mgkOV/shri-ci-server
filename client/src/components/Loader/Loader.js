import React from "react";
import { cn } from "@bem-react/classname";

import "./Loader.scss";

const Loader = () => {
  const loaderStyles = cn("Loader")();
  return (
    <div className="Loader-Wrapper">
      <div className={loaderStyles}>Loading...</div>
    </div>
  );
};

export default Loader;
