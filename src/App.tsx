import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { todo } from "./utils/model";
import TodoList from "./components/TodoList";
import { defaultData } from "./utils/default";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<todo[]>([...defaultData]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo,
          isDone: false,
        },
      ]);
    }
    setTodo("");
  };

  return (
    <div className="App">
      <span className="heading">Notio ✨</span>

      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
