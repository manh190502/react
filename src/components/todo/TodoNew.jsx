import { useState } from "react";

const TodoNew = (props) => {
  const { addNewTodo } = props;

  const [valueInput, setValueInput] = useState("");

  const handleCLick = () => {
    if (valueInput === "") {
      alert("Input Something!?");
    } else {
      addNewTodo(valueInput);
      setValueInput("");
    }
  };

  const handleOnChange = (valueInput) => {
    setValueInput(valueInput);
  };

  return (
    <div className="todo-new">
      <input
        className="p-1 border border-black rounded-lg"
        type="text"
        onChange={(e) => {
          handleOnChange(e.target.value);
        }}
        value={valueInput}
      />
      <button
        className="bg-cyan-400 border rounded-lg px-2 py-0.5 text-center font-semibold"
        onClick={handleCLick}
      >
        Add
      </button>
    </div>
  );
};

export default TodoNew;
