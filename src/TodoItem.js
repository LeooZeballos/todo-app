import React from "react";
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

function TodoItem(props){
    return(
        <li className="todo-item">
            <input type="checkbox" checked={props.completed} />
            <p>{props.text}</p>
            <FontAwesomeIcon className="delete" icon={faXmarkCircle} />
        </li>
    );
}

export { TodoItem };