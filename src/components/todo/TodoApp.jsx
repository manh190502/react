import "./todo.css";
import TodoData from "./TodoData";
import TodoNew from "./TodoNew";
import reactLogo from "../../assets/react.svg";
import { useState } from "react";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 100000),
      name: name,
    };

    setTodoList([...todoList, newTodo]);
  };

  const deleteTodo = (id) => {
    const newTodo = todoList.filter((item) => item.id !== id);
    setTodoList(newTodo);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div className="todo-container">
      <div className="todo-title">Test List</div>
      <TodoNew addNewTodo={addNewTodo} />
      {todoList.length > 0 ? (
        <TodoData todoList={todoList} deleteTodo={deleteTodo} />
      ) : (
        <div className="flex justify-center todo-image">
          <img className="logo" src={reactLogo} alt="" />
        </div>
      )}
    </div>
  );
};

export default TodoApp;
