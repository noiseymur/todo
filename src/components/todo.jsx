import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCheck, toggleUrgent, selectTodo } from "../redux/actions";

function Todo({ todo }) {
  // VARIABLE DECLARATIONS

  const selectedTodo = useSelector((state) => state.selectedTodo);
  const dispatch = useDispatch();

  // HANDLERS

  function changeTodoCheck(e, id) {
    e.stopPropagation();
    dispatch(toggleCheck(id));
  }

  function changeTodoUrgency(e, id) {
    e.stopPropagation();
    dispatch(toggleUrgent(id));
  }

  function onSelectTodo(e, id) {
    if (todo.id !== selectedTodo) {
      dispatch(selectTodo(id));
    } else {
      dispatch(selectTodo(null));
    }
  }

  // RENDER

  return (
    <div
      className={`todo ${todo.completed ? "done" : ""} ${
        todo.id === selectedTodo ? "selected" : ""
      }`}
      onClick={(e) => onSelectTodo(e, todo.id)}
    >
      <div className="checkbox" onClick={(e) => changeTodoCheck(e, todo.id)}>
        <img
          src={require("../assets/icons/checkmark.svg").default}
          alt="Check mark"
        />
      </div>
      <span>
        {todo.title}
        <div className="due-date">
          {todo.date ? new Date(todo.date).toDateString().slice(4) : ""}
        </div>
      </span>
      <div className="urgent" onClick={(e) => changeTodoUrgency(e, todo.id)}>
        {todo.urgent ? (
          <img
            src={require("../assets/icons/filled-star.svg").default}
            alt="filled start icon"
          />
        ) : (
          <img
            src={require("../assets/icons/star.svg").default}
            alt="start icon"
          />
        )}
      </div>
    </div>
  );
}

export default React.memo(Todo);
