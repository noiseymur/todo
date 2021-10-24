import "./styles/CSS/index.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodos, updateCategories } from "./redux/actions";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "./components/layout";
import axios from "axios";

function App() {
  // VARIABLE DECLARATIONS
  const { todos, allCategories } = useSelector((state) => state);
  const dispatch = useDispatch();

  // API FUNCTION

  async function getTodos() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      if (!res) throw Error("No data available");
      const modded = res.data.slice(0, 20).map((todo) => ({
        // Taking only 20 tasks, because 200 is too many;
        ...todo,
        date: Math.floor(Math.random() * 2)
          ? Date.now() + Math.floor(Math.random() * 30) * 60 * 60 * 24 * 1000 // Assigning a random day of up to 30 days from now to make some tasks look like they are planned.
          : null,
        urgent: Math.random() < 0.5, // Making random tasks urgent
      }));
      dispatch(addTodos(modded));
    } catch (err) {
      window.alert("Couldn't get existing todos");
    }
  }

  // EFFECT HOOKS

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(async () => {
    dispatch(updateCategories(todos));
  }, [todos]);

  // RENDER

  return (
    <div className="App">
      <Router>
        <Switch>
          {allCategories.map((category) => (
            <Route exact path={category.url} key={category.url}>
              <Layout pageTitle={category.name} todos={category.todos} />
            </Route>
          ))}
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
