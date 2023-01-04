import React, { useRef } from "react";
import "../utils/styles.css";

type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
};

const InputField: React.FC<Props> = ({ todo, setTodo, handleAddTodo }) => {
  const inputRef = useRef<HTMLFormElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAddTodo(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="input_submit">
        Go!
      </button>
    </form>
  );
};

export default InputField;
