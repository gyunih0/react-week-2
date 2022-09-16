import React from "react";
import { useParams } from "react-router-dom";

import Detail from "../components/Detail";

const TodoDetail = () => {
  const { id } = useParams();
  return <Detail id={id} />;
};

export default TodoDetail;
