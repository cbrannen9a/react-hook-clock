import React from "react";
import ReactDOM from "react-dom";
import Clock from "../Clock";

describe("Clock", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Clock timezone={{ label: "test", value: "test" }} />, div);
  });
});
