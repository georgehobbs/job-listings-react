import React, { useState } from "react";

import data from "../assets/data.json";
import Listing from "./Listing";
import Filter from "./Filter";

function MainContent() {
  const [filterItems, setFilters] = useState([]);

  function createListing(listing) {
    const tags = [...listing.languages, ...listing.tools];
    const checker = (arr, target) => target.every(v => arr.includes(v));
    const displayItem = checker(tags, filterItems);

    if (filterItems.length === 0 || (filterItems.length > 0 && displayItem === true)) {
    return (
      <Listing
        key={listing.id}
        company={listing.company}
        logo={listing.logo}
        new={listing.new}
        featured={listing.featured}
        position={listing.position}
        role={listing.role}
        level={listing.level}
        postedAt={listing.postedAt}
        contract={listing.contract}
        location={listing.location}
        languages={listing.languages}
        tools={listing.tools}
        checkFilter={checkFilter}
        filterItems={filterItems}
      />
    )};
  }

  function checkFilter(tag) {
    {
      filterItems.includes(tag, 0) ? removeFilterItem(tag) : addFilterItem(tag);
    }
  }

  function addFilterItem(newFilter) {
    setFilters((prevFilters) => [...prevFilters, newFilter]);
  }

  function removeFilterItem(filterToRemove) {
    setFilters((prevFilters) => {
      return prevFilters.filter((filterItems, index) => {
        return filterItems !== filterToRemove;
      });
    });
  }

  function clearFilter() {
    setFilters([]);
  }

  return (
    <div className="container-fluid">
      {filterItems.length > 0 && (
        <Filter
          filterItems={filterItems}
          removeFilter={removeFilterItem}
          clear={clearFilter}
        />
      )}
      {data.map(createListing)}
    </div>
  );
}

export default MainContent;
