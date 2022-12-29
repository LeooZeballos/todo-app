import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      type="search"
      className="form-control rounded"
      placeholder="Buscar"
      aria-label="Buscar"
      aria-describedby="search-addon"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
