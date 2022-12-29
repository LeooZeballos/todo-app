import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  // Get the todos from the localStorage
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  // Use State Hook to manage the state of the search input
  const [searchValue, setSearchValue] = React.useState("");
  // Number of completed todos
  const completedTodos = todos.filter((todo) => !!todo.completed).length;

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

  // Function to toggle the completed property of a todo
  const toggleCompleteTodo = (text) => {
    // Find the index of the todo to complete by its text
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    // Create a copy of the todos array
    const newTodos = [...todos];
    // Set the completed property of the todo to the opposite value
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    // Update the todos state
    saveTodos(newTodos);
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
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        todos,
        completedTodos,
        totalTodos: todos.length,
        searchValue,
        setSearchValue,
        searchedTodos,
        toggleCompleteTodo: toggleCompleteTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };