import React from "react";
import { cn } from "@bem-react/classname";

import "./Loader.scss";

const Loader = () => {
  const loaderStyles = cn("Loader")();
  return <div className={loaderStyles}>Loading...</div>;
};

export default Loader;
