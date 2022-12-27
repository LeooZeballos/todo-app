import React from "react";
import './TodoSearch.css';

function TodoSearch() {

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    }

    return(
        <input type="search" className="form-control rounded" placeholder="Buscar" aria-label="Search" aria-describedby="search-addon"
        onChange={onSearchValueChange}
        />
    );
}

export {TodoSearch};