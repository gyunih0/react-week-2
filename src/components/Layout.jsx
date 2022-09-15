import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Form from "./Form";
import List from "./List";

const LayoutContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

export default function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Form />
      <List />
    </LayoutContainer>
  );
}
