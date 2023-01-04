import React, { useEffect, useRef, useState } from "react";
import { todo } from "../utils/model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "../utils/styles.css";

type Props = {
  todo: todo;
  todos: todo[];
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
};

const Todo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleTaskDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleTaskDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleTodoEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="todos__single"
      onSubmit={(e) => handleTodoEdit(e, todo.id)}
    >
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleTaskDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleTaskDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default Todo;
