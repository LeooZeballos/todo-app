import React from "react";
import { Container } from "react-bootstrap";
import { TodoContext } from "../TodoContext";

import "./TodoForm.css";

function TodoForm() {
  // State Hook para el valor del input
  const [newTodoValue, setNewTodoValue] = React.useState("");

  // Aquí se obtiene la función "saveTodo" del contexto
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  // Al hacer click en el botón de "Añadir TODO" se ejecuta esta función
  const onSubmit = (event) => {
    // Evitar que el formulario se envíe
    event.preventDefault();
    // Añadir el nuevo TODO
    addTodo(newTodoValue);
    // Limpiar el valor del input
    setNewTodoValue("");
    // Cerrar el modal
    setOpenModal(false);
  };

  // Al hacer click en el botón de "Cancelar" se ejecuta esta función
  const onCancel = () => {
    // Limpiar el valor del input
    setNewTodoValue("");
    // Cerrar el modal
    setOpenModal(false);
  };

  // Al escribir en el input se ejecuta esta función
  const onChange = (event) => {
    // Actualizar el valor del input
    setNewTodoValue(event.target.value);
  };

  return (
    <Container className="p-5 vertical-center bg-light bg-gradient card shadow w-50">
      <form className="form" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="todo" className="form-label">
            Nuevo TODO
          </label>
          <textarea
            type="text"
            className="form-control"
            id="todo"
            placeholder="Escribe tu TODO"
            value={newTodoValue}
            onChange={onChange}
          />
        </div>
        <div className="flex-row justify-content-center">
          <button
            className="btn btn-secondary me-md-2"
            type="button"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button className="btn btn-primary" type="submit">
            Añadir TODO
          </button>
        </div>
      </form>
    </Container>
  );
}

export { TodoForm };
