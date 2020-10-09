import React, { FC } from "react";
import { useTicker } from "../../hooks";

import "./Clock.css";

const Clock: FC<Props> = ({ timezone }) => {
  const date = useTicker(timezone);

  return <div className="clock">{date.format("LTS")}</div>;
};

interface Props {
  timezone: TimeZone;
}

export default Clock;
