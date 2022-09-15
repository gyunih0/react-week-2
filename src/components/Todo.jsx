import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";

const TodoContainer = styled.div`
  display: inline-block;
  margin: 0 10px 30px 0;
  border: 4px solid rgb(137, 163, 251);
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 25%;
  transition: transform 1000ms;
`;

const TodoTitle = styled.h2`
  color: rgb(65, 64, 64);
  font-size: 25px;
  line-height: 1.4;
  letter-spacing: 0.03em;
`;

const ButtonSet = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

const DeleteButton = styled.button`
  font-size: 15px;
  color: rgb(76, 75, 75);
  width: 50%;
  background-color: #fff;
  border: 3px solid red;
  border-radius: 10px;
  padding: 10px;
  font-weight: 700;
  &:hover {
    opacity: 0.8;
  }
`;

const TodoStateChangeButton = styled.button`
  font-size: 15px;
  color: rgb(76, 75, 75);
  font-weight: 700;
  width: 50%;
  background-color: #fff;
  border: 3px solid rgb(67, 110, 250);
  border-radius: 10px;
  padding: 10px;
  &:hover {
    opacity: 0.8;
  }
`;

const GoToDetailButton = styled.button`
  font-size: 10px;
  color: rgb(76, 75, 75);
  font-weight: 700;
  width: 50%;
  background-color: #fff;
  border: 2px solid black;
  border-radius: 10px;
  padding: 8px;
`;

export default function Todo({ title, body, id, isDone }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const todos = useSelector((state) => state.todos.todos);

  return (
    <TodoContainer>
      <div>
        <GoToDetailButton
          onClick={() => {
            navigate("/" + id);
          }}
        >
          상세페이지
        </GoToDetailButton>
      </div>
      <div>
        <TodoTitle>{title}</TodoTitle>
        <div>{body}</div>
      </div>
      <div>
        <ButtonSet>
          <DeleteButton
            onClick={() => {
              dispatch(deleteTodo(id));
            }}
          >
            삭제하기
          </DeleteButton>
          {isDone ? (
            <TodoStateChangeButton
              onClick={() => {
                dispatch(updateTodo(id));
              }}
            >
              취소
            </TodoStateChangeButton>
          ) : (
            <TodoStateChangeButton
              onClick={() => {
                dispatch(updateTodo(id));
              }}
            >
              완료
            </TodoStateChangeButton>
          )}
        </ButtonSet>
      </div>
    </TodoContainer>
  );
}
