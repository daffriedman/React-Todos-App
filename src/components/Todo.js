import React from "react";
import { Checkbox,IconButton,ListItem,Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
const Todo = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheckBoxClick = () => {
    toggleComplete(todo.id);
  };

  const handleRemoveClick =() =>{
      removeTodo(todo.id)
  }
  console.log(todo);
  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox  checked={todo.completed}  onClick={handleCheckBoxClick}/>
      <Typography
      variant='body1'
        style={{
        //   color: "white",
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
          <Close/>
          </IconButton>
    </ListItem>
  );
};
export default Todo;
