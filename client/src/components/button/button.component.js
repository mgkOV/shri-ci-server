import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./button.styles.scss";

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const Button = ({ className, children }) => {
  const btnClass = classNames("Button", className);

  return (
    <button type="button" className={btnClass}>
      {children}
    </button>
  );
};

Button.propTypes = propTypes;

export default Button;
