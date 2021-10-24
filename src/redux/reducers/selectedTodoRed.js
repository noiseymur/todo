import * as types from "../action-types";

const selectedTodoRed = (state = null, action) => {
  switch (action.type) {
    case types.SELECT_TODO:
      return action.payload;
    default:
      return state;
  }
};

export default selectedTodoRed;
