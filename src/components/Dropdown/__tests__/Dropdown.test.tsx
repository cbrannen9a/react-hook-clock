import React from "react";
import ReactDOM from "react-dom";
import Dropdown from "../Dropdown";

const items = [
  { label: "test", value: "value" },
  { label: "default", value: "default" },
];
const initialValue = { label: "default", value: "default" };
const handleSelected = (item: DropDownItem) => {};

describe("Dropdown", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Dropdown
        items={items}
        initialValue={initialValue}
        handleSelected={handleSelected}
      />,
      div
    );
  });
});
