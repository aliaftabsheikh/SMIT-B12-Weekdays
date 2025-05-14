import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { addTodo } from "./features/todoSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  function add() {
    dispatch(addTodo(input));
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {todos?.map((item) => (
        <p>{item.text}</p>
      ))}

      <button onClick={add}>Add Todo !</button>
    </div>
  );
}

export default App;
