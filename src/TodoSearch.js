import React from "react";
import './TodoSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function TodoSearch(){
    return(
        <div className="input-group rounded">
            <input type="search" className="form-control rounded" placeholder="Buscar" aria-label="Search" aria-describedby="search-addon" />
            <span className="input-group-text border-0" id="search-addon">
                <FontAwesomeIcon icon={faSearch} />
            </span>
        </div>
    );
}

export {TodoSearch};