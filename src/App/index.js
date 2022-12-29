import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

function App() {
  // Render the AppUI component
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export { App };
