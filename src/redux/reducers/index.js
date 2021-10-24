import { combineReducers } from "redux";
import todosRed from "./todosRed";
import searchRed from "./searchRed";
import categoryRed from "./categoryRed";
import allCategoriesRed from "./allCategoriesRed";
import sidebarRed from "./sidebarRed";
import sortingRed from "./sortingRed";
import selectedTodoRed from "./selectedTodoRed";

export default combineReducers({
  todos: todosRed,
  search: searchRed,
  category: categoryRed,
  allCategories: allCategoriesRed,
  sidebar: sidebarRed,
  sorting: sortingRed,
  selectedTodo: selectedTodoRed,
});
