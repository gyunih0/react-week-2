import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

import Todo from "./Todo";

const ListContainer = styled.div`
  padding: 0 24px;
`;

const ListTitle = styled.h2`
  color: #464545;
  font-size: 21px;
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export default function List() {
  const todos = useSelector((state) => state.todos.todos);
  const workList = todos.filter((todo) => todo.isDone === false);
  const doneList = todos.filter((todo) => todo.isDone === true);

  return (
    <ListContainer>
      <ListTitle>Working.. 🔥</ListTitle>
      <ListWrapper>
        {workList.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              body={todo.body}
              isDone={todo.isDone}
            />
          );
        })}
      </ListWrapper>
      <ListTitle>Done..! 🎉</ListTitle>
      <ListWrapper>
        {doneList.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              body={todo.body}
              isDone={todo.isDone}
            />
          );
        })}
      </ListWrapper>
    </ListContainer>
  );
}
