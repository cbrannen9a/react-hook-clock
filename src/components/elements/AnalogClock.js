import React from "react";
import PropTypes from "prop-types";
import { useTicker } from "../../hooks/index";

import "./AnalogClock.css";

const AnalogClock = ({ timezone }) => {
  const date = useTicker(timezone);

  const getTimeStyles = () => {
    return {
      "--current-seconds": date.seconds(),
      "--current-minutes": date.minutes(),
      "--current-hours": date.hours() % 12,
    };
  };

  return (
    <svg className="analogClock" style={getTimeStyles()} viewBox="0 0 40 40">
      <circle className="analogClockFace" cx="20" cy="20" r="19" />
      <g className="marks">
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
      </g>
      <line x1="0" y1="0" x2="9" y2="0" className="hour" />
      <line x1="0" y1="0" x2="13" y2="0" className="minute" />
      <line x1="0" y1="0" x2="16" y2="0" className="seconds" />
      <circle cx="20" cy="20" r="0.7" className="pin" />
    </svg>
  );
};

AnalogClock.propTypes = {
  timezone: PropTypes.object.isRequired,
};

export default AnalogClock;
