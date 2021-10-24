import * as types from "../action-types";

const allCategoriesRed = (
  state = [
    {
      name: "today's",
      url: "/",
      icon: "sunIcon",
      todos: [],
    },
    {
      name: "urgent",
      url: "/urgent",
      icon: "starIcon",
      todos: [],
    },
    {
      name: "planned",
      url: "/planned",
      icon: "calendarIcon",
      todos: [],
    },
    {
      name: "all",
      url: "/all",
      icon: "listIcon",
      todos: [],
    },
  ],
  action
) => {
  switch (action.type) {
    case types.UPDATE_CATEGORIES:
      const dayEnd = new Date();
      dayEnd.setUTCHours(23, 59, 59, 999);
      return [
        {
          ...state[0],
          todos: action.payload.filter(
            (todo) => todo.date && dayEnd.getTime() - todo.date > 0
          ),
        },
        {
          ...state[1],
          todos: action.payload.filter((todo) => todo.urgent),
        },
        {
          ...state[2],
          todos: action.payload.filter((todo) => todo.date),
        },
        { ...state[3], todos: action.payload },
      ];
    default:
      return state;
  }
};

export default allCategoriesRed;
