import React, { CSSProperties, FC } from "react";
import { useTicker } from "../../hooks";

import "./AnalogClock.css";

const AnalogClock: FC<Props> = ({ timezone }) => {
  const date = useTicker(timezone);

  const getTimeStyles = () => {
    return {
      "--current-seconds": date.second(),
      "--current-minutes": date.minute(),
      "--current-hours": date.hour() % 12,
    } as CSSProperties;
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

interface Props {
  timezone: TimeZone;
}

export default AnalogClock;
