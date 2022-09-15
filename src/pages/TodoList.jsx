import React from "react";
import styled from "styled-components";

import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const TodoDetailContainer = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
`;

const TodoTitle = styled.h2`
  color: rgb(65, 64, 64);
  font-size: 25px;
  line-height: 1.4;
  letter-spacing: 0.03em;
`;

const GoToMainButton = styled.button`
  font-size: 10px;
  color: rgb(76, 75, 75);
  font-weight: 700;
  width: 50%;
  background-color: #fff;
  border: 2px solid black;
  border-radius: 10px;
  padding: 8px;
`;

const TodoList = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const todo = useSelector((state) =>
    state.todos.todos.filter((todo) => todo.id == id)
  )[0];

  console.log("todo ===>", todo);
  return (
    <TodoDetailContainer>
      <GoToMainButton
        onClick={() => {
          navigate("/");
        }}
      >
        이전으로
      </GoToMainButton>
      <h1>id: {todo.id}</h1>
      <TodoTitle>{todo.title}</TodoTitle>
      <div>{todo.body}</div>
    </TodoDetailContainer>
  );
};

export default TodoList;
