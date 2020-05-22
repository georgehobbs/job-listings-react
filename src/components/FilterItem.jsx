import React from "react";

function FilterItem(props) {
  return (
    <li class="filter-bullet">
      <span class="filter-text">{props.text}</span>
      <button type="button" class="remove" onClick={() => {props.onClick(props.text)}}>
        <span>&times;</span>
      </button>
    </li>
  );
}

export default FilterItem;
