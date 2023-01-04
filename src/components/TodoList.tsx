import React from "react";
import { todo } from "../utils/model";
import Todo from "./Todo";
import "../utils/styles.css";

interface props {
  todos: todo[];
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
}

const TodoList: React.FC<props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos?.map((todo) => (
        <Todo todos={todos} todo={todo} key={todo.id} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
