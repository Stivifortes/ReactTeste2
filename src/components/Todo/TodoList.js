import React, { useState } from "react";
import { addTodo, toggleTodo } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import {
  Header,
  Body,
  Container,
  Form,
  FormContainer,
  ButtonContainer,
} from "./styles.js";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const ids = Math.floor(Math.random() * 1000);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(ids, text));
    setText("");
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="Add a new todo"
          onChange={handleChange}
        />
        <input type="submit" value="Add" />
      </form>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              key={index}
              onClick={() => handleToggle(todo)}
            >
              {todo.task}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Container>
          <FormContainer>
            <p>Add a billing adress</p>
            <Form onSubmit="">
              <label>
                Adress
                <input type="text" placeholder="Adress" />
              </label>
              <label>
                City
                <input type="text" placeholder="City" />
              </label>
              <label>
                Sate
                <input type="text" placeholder="Sate" />
              </label>
              <label>
                Postal Code
                <input type="text" placeholder="Postal Code" />
              </label>
              <label>
                Country
                <select type="" placeholder="Country">
                  <option value="Cabo Verde">Cabo Verde</option>
                  <option value="Germany">Germany</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Luxembourg">Luxembourg</option>
                </select>
              </label>
              <label>
                Phone
                <input type="text" placeholder="Phone" />
              </label>
              <label>
                Tax Identification Number
                <input type="text" placeholder="Tax Identification Number" />
              </label>
            </Form>
            <ButtonContainer>
              <button type="submit">Save</button>
              <button>Cancel</button>
            </ButtonContainer>
          </FormContainer>
        </Container>
      </div>
    </div>
  );
}

export default TodoList;
