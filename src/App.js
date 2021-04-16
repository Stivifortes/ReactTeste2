import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addTodo } from "./actions";
import TodoList from "./components/Todo/TodoList";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();

  return (
    <div className="App">
      {/* <div>Counter: {counter}</div>
      <div>User Login: {isLogged}</div>
      <button onClick={() => dispatch(increment(2))}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button> */}
      <TodoList />
    </div>
  );
}

export default App;
