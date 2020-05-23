import React from "react";
import FilterItem from "./FilterItem";
import Zoom from "@material-ui/core/Zoom";

function Filter(props) {
  function createFilterItem(filterItem, index) {
    return (
      <FilterItem
        text={filterItem}
        onClick={props.removeFilter}
        id={index}
        key={index}
      />
    );
  }

  return (
    <Zoom in={true} out={true}>
      <div class="row filter">
        <div class="col-sm-auto">
          <ul class="list-group list-group-horizontal flex-wrap filter-items">
            {props.filterItems.map(createFilterItem)}
          </ul>
        </div>
        <button
          class="btn clear"
          type="button"
          name="clear"
          onClick={props.clear}
        >
          Clear Filters
        </button>
      </div>
    </Zoom>
  );
}

export default Filter;
