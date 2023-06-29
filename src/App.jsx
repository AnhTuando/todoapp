import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Heading from "./components/Heading";
import InputForm from "./components/InputForm";
import { useState, createContext } from "react";
import TodoItem from "./components/TodoItem";
import FilterForm from "./components/FilterForm";
export const SharedArr = createContext();

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Action 1",
      completed: true,
    },
    {
      title: "Action 2",
      completed: false,
    },
  ]);
  const [selectedFilterOption, setSelectedFilterOption] = useState("All");
  const changeFilterValue = (filter) => {
    setSelectedFilterOption(filter);
  };
  const addData = (newData) => {
    setTodos([...todos, newData]);
  };
  const delData = (newData) => {
    setTodos(newData);
  };
  const filteredTodos =
    selectedFilterOption === "Active"
      ? todos.filter((todo) => !todo.completed)
      : selectedFilterOption === "Completed"
      ? todos.filter((todo) => todo.completed)
      : todos;
  return (
    <SharedArr.Provider value={{ todos, addData, delData, changeFilterValue }}>
      <div className="app">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-7">
              <div className="wrap-components-items bg-light p-4">
                <Heading>Todo App</Heading>
                <InputForm></InputForm>
                <FilterForm></FilterForm>
                <TodoItem todoArr={filteredTodos}></TodoItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SharedArr.Provider>
  );
}

export default App;
