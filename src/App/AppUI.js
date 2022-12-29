import React from "react";

import Container from "react-bootstrap/Container";

import { WelcomeMessage } from "../WelcomeMessage";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButtom } from "../CreateTodoButtom";

import "./App.css";

function AppUI({
  loading,
  error,
  todos,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <React.Fragment>
      <Container className="p-5 vertical-center bg-light bg-gradient card shadow">
        <WelcomeMessage />
        <TodoCounter
          completedTodos={completedTodos}
          totalTodos={totalTodos}
        />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {error && <p>Desespérate, hubo un error...</p>}
          {loading && <p>Cargando...</p>}
          {!loading && !todos.length && <p>¡Crea tu primer TODO!</p>}
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButtom />
      </Container>
    </React.Fragment>
  );
}

export { AppUI };
