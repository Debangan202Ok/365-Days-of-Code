import { useState } from "react";

const TodoArea = () => {
  const [todo, setTodo] = useState(["item 1", "item 2", "item 3"]);
  return (
    <>
      <TodoList todo={todo.length} />
      <InputTodo addTodo={setTodo} />
      <TodoEntries todo={todo} />
    </>
  );
};
export default TodoArea;

const TodoList = ({ todo }) => {
  return <h2>Total Todo:{todo}</h2>;
};
const TodoEntries = ({ todo }) => {
  return (
    <>
      {todo.map((item) => {
        return <p>{item}</p>;
      })}
    </>
  );
};
const InputTodo = ({ addTodo }) => {
  const [inputVal, setInput] = useState();
  return (
    <>
      <input
        type="text"
        name="todo"
        id=""
        value={inputVal}
        onChange={(e) => {
          e.preventDefault();
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodo((preVal) => [...preVal, inputVal]);
          setInput("");
        }}
      >
        Add Todo
      </button>
    </>
  );
};
