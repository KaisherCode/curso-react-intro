import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos=[
  {text:'Aprender GitHub',completed:true},
  {text:'Aprender HTML5',completed:false},
  {text:'Aprender Tailwind3',completed:false},
  {text:'Aprender JavaScript',completed:false},
  {text:'Curso Profesional de Git y GitHub',completed:true},
];

function App() {
  const [todos]=React.useState(defaultTodos);
  const [searchValue,setSearchValue]=React.useState('');

  // LOS ESTASOS DERIVADSO: Son propiedades, variables, cálculos que hacemos a partir de un estado.
  const completedTodos = todos.filter(todo=>!!todo.completed).length;
  const totalTodos=todos.length;
    console.log('Los usuarios buscan todos de '+ searchValue);
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
  <TodoSearch
    searchValue={searchValue}
    setSearchValue={setSearchValue}
  />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}

      </TodoList>

      <CreateTodoButton/>
    </>
  );
}

export default App;
