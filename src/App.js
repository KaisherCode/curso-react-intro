import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos=[
  {text:'Aprender GitHub',completed:true},
  {text:'Aprender HTML5',completed:true},
  {text:'Aprender Tailwind3',completed:false},
  {text:'Aprender JavaScript',completed:false},
  {text:'Curso Profesional de Git y GitHub',completed:true},
];

function App() {
  const [todos]=React.useState(defaultTodos);
  const [searchValue,setSearchValue]=React.useState('');
  
  // LOS ESTASOS DERIVADDOS: Son propiedades, variables, cálculos que hacemos a partir de un estado.
  const completedTodos = todos.filter(todo => !!todo.completed).length; // !! - retorna un boleano
  const totalTodos=todos.length;
  // Filtrar datos en el buscador
  const searchedTodos = todos.filter(
    (todo)=> {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });

    console.log(`Buscando todos de ${searchValue}`);

  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
          {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}/>
        ))}

      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
