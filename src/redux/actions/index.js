import * as types from "../action-types";

export const addTodos = (todos) => {
  return { type: types.ADD_TODOS, payload: todos };
};

export const deleteTodo = (id) => {
  return { type: types.DELETE_TODO, payload: id };
};

export const toggleCheck = (id) => {
  return { type: types.TOGGLE_CHECK, payload: id };
};

export const toggleUrgent = (id) => {
  return { type: types.TOGGLE_URGENT, payload: id };
};

export const searchTodo = (text) => {
  return { type: types.SET_SEARCH, payload: text };
};

export const setCategory = (url) => {
  return { type: types.SET_CATEGORY, payload: url };
};

export const updateCategories = (todos) => {
  return { type: types.UPDATE_CATEGORIES, payload: todos };
};

export const toggleSidebar = () => {
  return { type: types.TOGGLE_SIDEBAR, payload: null };
};

export const setSorting = (filter) => {
  return { type: types.SET_SORTING, payload: filter };
};

export const selectTodo = (id) => {
  return { type: types.SELECT_TODO, payload: id };
};

export const setDate = (id, ts) => {
  return { type: types.SET_DATE, payload: { id, ts } };
};
