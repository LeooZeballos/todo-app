import React from "react";
import './CreateTodoButtom.css';

function CreateTodoButtom() {

    const onClickButton = (msg) => {
        alert(msg);
    }

    return(
        <button
            className="nuevo-todo"
            onClick={() => onClickButton("Nuevo TODO")}
        >
            Nuevo TODO +
        </button>
    );
}

export { CreateTodoButtom};