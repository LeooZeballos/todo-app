import { WelcomeMessage } from './WelcomeMessage';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButtom } from './CreateTodoButtom';

import Container from 'react-bootstrap/Container';

import React from 'react';

const todos = [
  { text: 'Estudiar React', completed: false },
  { text: 'Comer', completed: false },
  { text: 'Dormir', completed: false },
]

function App() {
  return (
    <React.Fragment>
      <Container className="p-5 vertical-center bg-light bg-gradient card">
        <WelcomeMessage/>
        <TodoCounter/>
        <TodoSearch/>
        <TodoList>
          {todos.map(todo =>(<TodoItem key={todo.text} text={todo.text} />))}
        </TodoList>
        <CreateTodoButtom/>
      </Container>
   </React.Fragment>
  );
}

export { App };