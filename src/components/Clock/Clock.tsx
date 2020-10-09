import React, { FC } from "react";
import { getLocalisedDate } from "../../helpers";
import { useTicker } from "../../hooks";

import "./Clock.css";

const Clock: FC<Props> = ({ timezone }) => {
  const date = useTicker(timezone);

  return <div className="clock">{getLocalisedDate(date)}</div>;
};

interface Props {
  timezone: TimeZone;
}

export default Clock;
