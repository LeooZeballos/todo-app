import React from "react";
import './TodoSearch.css';

function TodoSearch() {

    const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

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

export {TodoSearch};