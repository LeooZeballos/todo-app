import { WelcomeMessage } from './WelcomeMessage';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButtom } from './CreateTodoButtom';

import './App.css';
import Container from 'react-bootstrap/Container';

import React from 'react';

const todos = [
  { text: 'Hacer curso de React', completed: false },
  { text: 'Estudiar React', completed: false },
  { text: 'Comer', completed: false },
  { text: 'Dormir', completed: false },
  { text: 'Trabajar', completed: false },
]

function App() {
  return (
    <React.Fragment>
      <Container className="p-3 vertical-center bg-light bg-gradient">
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

export default App;
