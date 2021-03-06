import React from 'react';
import { List } from '@material-ui/core';
import Todo from './Todo';
const TodoList=({todos, toggleComplete, removeTodo})=>{
  console.log(todos);
return(<List>
    {todos.map(todo => (
        <Todo 
        key={todo.id} 
        todo={todo} 
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
        />
    ))}
</List>)

}
export default TodoList;