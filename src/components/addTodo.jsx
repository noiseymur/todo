import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodos } from "../redux/actions/index";
import { nanoid } from "nanoid";

function AddTodo(props) {
  // VARIABLE DECLARATIONS

  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);

  // HANDLERS

  function onSubmitTodo() {
    const text = input.trim();
    if (text) {
      const todo = {
        id: nanoid(),
        title: text,
        completed: false,
        urgent: category === "/urgent" ? true : false,
        date: category === "/" ? Date.now() : null,
      };
      dispatch(addTodos([todo]));
    }
    setInput("");
  }

  function onInput(e) {
    setInput(e.target.value);
  }

  function onKeyDown(e) {
    if (e.which === 13) {
      onSubmitTodo();
    }
  }

  // RENDER

  return (
    <div className="add-todo">
      <div
        className={`btn ${input ? "clear" : ""}`}
        onClick={() => (input ? setInput("") : false)}
      >
        <img src={require("../assets/icons/plus.svg").default} alt="" />
      </div>
      <input
        value={input}
        type="text"
        placeholder="Add a new todo"
        onInput={onInput}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

export default AddTodo;
