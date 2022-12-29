import React from "react";

import Container from "react-bootstrap/Container";

import { WelcomeMessage } from "../WelcomeMessage";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButtom } from "../CreateTodoButtom";

import "./App.css";

function AppUI() {
  return (
    <React.Fragment>
      <Container className="p-5 vertical-center bg-light bg-gradient card shadow">
        <WelcomeMessage />
        <TodoCounter />
        <TodoSearch />
        <TodoContext.Consumer>
          {({ loading, error, searchedTodos, completedTodos, totalTodos, toggleCompleteTodo, deleteTodo }) => (
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
          )}
        </TodoContext.Consumer>
        <CreateTodoButtom />
      </Container>
    </React.Fragment>
  );
}

export { AppUI };
