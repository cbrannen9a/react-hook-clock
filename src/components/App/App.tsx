import React, { useState } from "react";

import AnalogClock from "../AnalogClock";
import Clock from "../Clock";

import Dropdown from "../Dropdown";
import { timezones } from "../../constants";

import "./App.css";

export default () => {
  const [timezone, setTimezone] = useState({
    label: "London",
    value: "Europe/London",
  });

  return (
    <div className="App">
      <Clock timezone={timezone} />
      <AnalogClock timezone={timezone} />
      <Dropdown
        items={timezones}
        initialValue={timezone}
        handleSelected={setTimezone}
      />
    </div>
  );
};
