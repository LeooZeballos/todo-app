import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickButton = () => {
      props.setOpenModal(true);
    };

    return (
      <button
        className="nuevo-todo"
        onClick={onClickButton}
      >
        Nuevo TODO +
      </button>
    );
  }

export { CreateTodoButton};