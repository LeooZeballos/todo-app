import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButtom } from './CreateTodoButtom';

const todos = [
  { text: 'Hacer curso de React', completed: false },
  { text: 'Estudiar React', completed: false },
  { text: 'Comer', completed: false },
  { text: 'Dormir', completed: false },
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo =>(<TodoItem key={todo.text} text={todo.text} />))}
      </TodoList>
      <CreateTodoButtom />
   </React.Fragment>
  );
}

export default App;
