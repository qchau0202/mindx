import React, { useState } from "react";
import { Link } from "react-router-dom";

const RenderTodo = () => {
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleAddTodo = () => {
    const item = {
      id: Math.random(),
      todo: todo,
      checked: false,
    };
    setTodoList([...todolist, item]);
    setTodo("");
  };

  const toggleCheck = (props) => {
    props.isChecked = setChecked(!checked); 
  };
  // {checked ? 'Checked' : 'Not checked'} --> use to check checked

  const handleDeleteTodo = () => {
    todolist.splice(0, todolist.length);
    setTodoList([...todolist]);
  };

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };
  console.log(todo);
  return (
    <>
    <div className="main">
      <h1>#todo</h1>
      <div className="navigation">
        <Link to={"/"}>
          <span>All</span>
        </Link>
        <Link to={"/"}>
          <span>Active</span>
        </Link>
        <Link to={"/completed"}>
          <span>Completed</span>
        </Link>
      </div>

      <div className="to-do">
        <input
          className="userType"
          type="text"
          value={todo}
          onChange={handleTodo}
          placeholder="Enter a task"
        />
        <button className="add" onClick={handleAddTodo}>
          ADD
        </button>
      </div>

      <div className="render">
        {todolist.map((todo) => (
          <p key={todo.id}>
            <input className="check" type="checkbox" onChange={toggleCheck} />
            {todo.todo}
          </p>
        ))}
        </div>
        <button className = 'del'onClick={handleDeleteTodo}>Delete all</button>
    </div>
    </>
    
  );
};

export default RenderTodo;
