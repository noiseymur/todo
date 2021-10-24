import * as types from "../action-types";

const todosRed = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODOS:
      return [...action.payload, ...state];
    case types.DELETE_TODO:
      return state.filter((todo) => action.payload !== todo.id);
    case types.TOGGLE_CHECK:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case types.TOGGLE_URGENT:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, urgent: !todo.urgent } : todo
      );
    case types.SET_DATE:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, date: action.payload.ts }
          : todo
      );
    default:
      return state;
  }
};

export default todosRed;
