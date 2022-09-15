import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  color: rgb(67, 110, 250);
  font-size: 22px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.02em;
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 3px 20px;
`;

export default function Header() {
    return (
        <HeaderContainer>
            <div>
                My TodoList
            </div>
            <div>
                React
            </div>
        </HeaderContainer>
    );
}