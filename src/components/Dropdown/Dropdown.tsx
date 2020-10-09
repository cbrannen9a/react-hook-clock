import React, { useState, useEffect, FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import "./Dropdown.css";

const Dropdown: FC<Props> = ({ items, initialValue, handleSelected }) => {
  const [open, toggleOpen] = useState(false);
  const [selected, setSelected] = useState(initialValue);

  const handleClick = (item: DropDownItem) => {
    setSelected(item);
    toggleOpen(!open);
    handleSelected(item);
  };

  useEffect(() => {
    if (open) {
      const element = document.getElementById(selected.value);
      element?.scrollIntoView({ behavior: "auto" });
    }
  });

  return (
    <div className="dd-container">
      <div className="dd-wrapper">
        <div className="dd-header" onClick={() => toggleOpen(!open)}>
          <div className="dd-header-title">{selected.label}</div>
          <div className="dd-header-icon">
            {open ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </div>
        </div>
        {open && (
          <ul className="dd-list">
            {items.map((item) => (
              <div
                className="dd-list-item"
                key={item.value}
                id={item.value}
                onClick={() => handleClick(item)}
              >
                {item.label}{" "}
                {item.value === selected.value ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : null}
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

interface Props {
  items: DropDownItem[];
  initialValue: DropDownItem;
  handleSelected: (item: DropDownItem) => void;
}

export default Dropdown;
