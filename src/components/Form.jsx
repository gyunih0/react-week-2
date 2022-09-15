import React from "react";
import styled from "styled-components";

import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../redux/modules/todos";

const AddForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  padding: 30px;
  line-height: 1.4;
  letter-spacing: 0.02em;
`;

const InputGroup = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;

const FormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: #4e4d4d;
`;

const AddInput = styled.input`
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;

const AddButton = styled.button`
  background-color: rgb(67, 110, 250);
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 130px;
  &:hover {
    background-color: skyblue;
    color: blue;
  }
`;

export default function Form() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todos);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Todo 생성
  // *** id 로직 변경 필요함 ***
  const onClickCreateTodoHandler = () => {
    dispatch(
      createTodo({
        id: todos.length + 1,
        title: title,
        body: body,
        isDone: false,
      })
    );
    setTitle("");
    setBody("");
  };

  return (
    <AddForm>
      <InputGroup>
        <FormLabel>제목</FormLabel>
        <AddInput
          type="text"
          name="title"
          id="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        ></AddInput>
        <FormLabel>내용</FormLabel>
        <AddInput
          type="text"
          name="body"
          id="body"
          onChange={(e) => {
            setBody(e.target.value);
          }}
          value={body}
        ></AddInput>
        <AddButton type="button" onClick={onClickCreateTodoHandler}>
          추가하기
        </AddButton>
      </InputGroup>
    </AddForm>
  );
}
