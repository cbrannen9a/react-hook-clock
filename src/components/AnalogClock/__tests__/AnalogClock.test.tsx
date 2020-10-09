import React from "react";
import ReactDOM from "react-dom";
import AnalogClock from "../AnalogClock";

describe("AnalogClock", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <AnalogClock timezone={{ label: "test", value: "test" }} />,
      div
    );
  });
});
