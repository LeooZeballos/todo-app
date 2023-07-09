import React from "react";
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";

function TodoItem(props) {

    const icon = props.completed ? faCheckCircle : faCircle;
    const className = props.completed ? "todo-item completed" : "todo-item";

    return(
        <li className={className}>
            <FontAwesomeIcon
                className="checkbox"
                icon={icon}
                onClick={props.onComplete}
            />
            <p>{props.text}</p>
            <FontAwesomeIcon
                className="delete"
                icon={faXmarkCircle}
                onClick={props.onDelete}
            />
        </li>
    );
}

export { TodoItem };