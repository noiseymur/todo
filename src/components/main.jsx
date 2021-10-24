import SearchAndSort from "./searchNsort";
import Todo from "./todo";
import AddTodo from "./addTodo";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, Fragment } from "react";
import { selectTodo, deleteTodo, setDate } from "../redux/actions";
import { DatePicker } from "rsuite";
import isBefore from "date-fns/isBefore";
import "rsuite/dist/rsuite.min.css";

function Main({ pageTitle, todos }) {
  // VARIABLE DECLARATIONS

  const { sorting, search, selectedTodo } = useSelector((state) => state);
  const [completed, setCompleted] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const dispatch = useDispatch();

  // HANDLERS

  function onDeleteTodo(e, id) {
    e.stopPropagation();
    if (window.confirm("Selected todo will be deleted"))
      dispatch(deleteTodo(id));
    dispatch(selectTodo(null));
  }

  function onSetDate(ts) {
    dispatch(setDate(selectedTodo, ts));
    dispatch(selectTodo(null));
  }

  // EFFECT HOOKS

  useEffect(() => {
    let filteredTodos = todos.filter((todo) =>
      todo.title.toLowerCase().includes(search.trim().toLowerCase())
    );
    if (sorting !== "creation") {
      filteredTodos.sort((a, b) =>
        sorting === "alphabetical"
          ? a.title < b.title
            ? -1
            : 1
          : a.date - b.date
      );
    }
    setFiltered(filteredTodos);
  }, [todos, search, sorting]);

  useEffect(() => {
    setCompleted(filtered.filter((todo) => todo.completed === true));
  }, [filtered]);

  // RENDER

  return (
    <main>
      <div className="container">
        <SearchAndSort />
        <div className="title-n-tools">
          <h2>{pageTitle}</h2>
          {selectedTodo ? (
            <>
              <DatePicker
                placeholder="Set due date"
                placement="bottomEnd"
                disabledDate={(date) =>
                  isBefore(
                    date,
                    new Date(new Date().valueOf() - 1000 * 60 * 60 * 24)
                  )
                }
                onOk={(date, e) => {
                  e.stopPropagation();
                  onSetDate(date.getTime());
                }}
              />
              <div
                className="del-btn"
                onClick={(e) => onDeleteTodo(e, selectedTodo)}
              >
                <span>Delete</span>
                <img
                  src={require("../assets/icons/bin.svg").default}
                  alt="Trash bin icon"
                />
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="todos">
          <AddTodo />
          <div className="separator"></div>
          <div className="todos-list">
            {filtered
              .filter((todo) => todo.completed === false)
              .map((todo) => (
                <Fragment key={todo.id}>
                  <Todo todo={todo} />
                  <div className="separator"></div>
                </Fragment>
              ))}
            {completed.length ? (
              <>
                {completed.length !== filtered.length ? (
                  <div className="separator mt"></div>
                ) : (
                  <></>
                )}
                <p className="completed">
                  Completed <span>4</span>
                </p>
                <div className="separator"></div>
                {completed.map((todo) => (
                  <Fragment key={todo.id}>
                    <Todo todo={todo} />
                    <div className="separator"></div>
                  </Fragment>
                ))}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
