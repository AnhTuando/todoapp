import "./components.css";
import Button from "./Button";
import Checkbox from "./Checkbox";
import { SharedArr } from "../App";
import { useState, useContext } from "react";

export default function TodoItem({ todoArr = [] }) {
  const { delData } = useContext(SharedArr);
  const { todos } = useContext(SharedArr);
  const handleDeleteClickBtn = (index) => {
    const updateTodos = [...todos];
    updateTodos.splice(index, 1);
    delData(updateTodos);
    console.log(updateTodos);
  };
  const handleCheckboxChange = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;

    delData(updatedTodos);
  };
  const items = todoArr.map((todo, index) => (
    <div
      className="todo-item d-flex justify-content-between align-items-center"
      key={index}
    >
      <div className="wrap-content d-flex gap-2">
        <Checkbox
          checked={todo.completed}
          onChange={() => handleCheckboxChange(index)}
        ></Checkbox>
        <span>{todo.title}</span>
      </div>
      <Button variant={"danger"} onClick={() => handleDeleteClickBtn(index)}>
        Delete
      </Button>
    </div>
  ));
  return <div className="wrap-todo-items my-2 ">{items}</div>;
}
