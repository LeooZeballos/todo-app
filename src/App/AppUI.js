import React from "react";

import Container from "react-bootstrap/Container";

import { WelcomeMessage } from "../WelcomeMessage";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";

import "./App.css";

function AppUI() {

  const {
    loading,
    error,
    searchedTodos,
    totalTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <Container className="p-5 vertical-center bg-light bg-gradient card shadow main-container">
        <WelcomeMessage />
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {error && <p>Desespérate, hubo un error...</p>}
          {loading && <p>Cargando...</p>}
          {!loading && !totalTodos && <p>¡Crea tu primer TODO!</p>}
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => toggleCompleteTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
        )}
        <CreateTodoButton
          setOpenModal={setOpenModal}
        />
      </Container>
    </React.Fragment>
  );
}

export { AppUI };
