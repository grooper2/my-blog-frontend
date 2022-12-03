import React from "react";
import IconButton from "../Button/iconButton";

function SearchInput() {
  return (
    <div className="webflow-style-input">
      <input className="searchField" type='text' placeholder="Search for components"/>
      <IconButton />
    </div>
  );
}

export default SearchInput;
