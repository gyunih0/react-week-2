import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../components/Layout";
import TodoList from "../pages/TodoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/:id" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
