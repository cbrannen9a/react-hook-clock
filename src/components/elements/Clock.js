import React from "react";
import PropTypes from "prop-types";

import { useTicker } from "../../hooks";
import "./Clock.css";

const Clock = ({ timezone }) => {
  const date = useTicker(timezone);

  return <div className="clock">{date.format("LTS")}</div>;
};

Clock.propTypes = {
  timezone: PropTypes.object.isRequired,
};

export default Clock;
