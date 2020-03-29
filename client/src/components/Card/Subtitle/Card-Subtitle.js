import React from "react";
import PropTypes from "prop-types";

import "./Card-Subtitle.scss";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired
};

const CardSubtitle = ({ children, position }) => {
  const cardSubtitleStatus = cn("Card", "Subtitle")({ position });

  return <div className={cardSubtitleStatus}>{children}</div>;
};

CardSubtitle.propTypes = propTypes;

export default CardSubtitle;
