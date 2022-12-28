import React from "react";

import { AppUI } from "./AppUI";

// Default todos
const defaultTodos = [
  { text: "Estudiar React", completed: false },
  { text: "Comer", completed: false },
  { text: "Dormir", completed: false },
  { text: "Hacer ejercicio", completed: false },
];

function App() {
  // Use State Hook to manage the state of the todos
  const [todos, setTodos] = React.useState(defaultTodos);
  // Use State Hook to manage the state of the search input
  const [searchValue, setSearchValue] = React.useState("");
  // Number of completed todos
  const completedTodos = todos.filter((todo) => !!todo.completed).length;

  // Function to complete a todo
  const completeTodo = (text) => {
    // Find the index of the todo to complete by its text
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    // Create a copy of the todos array
    const newTodos = [...todos];
    // Set the completed property of the todo to true
    newTodos[todoIndex].completed = true;
    // Update the todos state
    setTodos(newTodos);
  };

  // Function to delete a todo
  const deleteTodo = (text) => {
    // Find the index of the todo to delete by its text
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    // Create a copy of the todos array
    const newTodos = [...todos];
    // Remove the todo from the array
    newTodos.splice(todoIndex, 1);
    // Update the todos state
    setTodos(newTodos);
  };

  // Filter the todos by the search value
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    // If the search value is empty, return all the todos
    searchedTodos = todos;
  } else {
    // If the search value is not empty, return the todos that match the search value
    searchedTodos = todos.filter((todo) => {
      // Convert the todo text and the search value to lowercase
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      // Return true if the todo text includes the search value
      return todoText.includes(searchText);
    });
  }

  // Render the AppUI component
  return (
    <AppUI
      todos={todos}
      completedTodos={completedTodos}
      totalTodos={todos.length}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export { App };
