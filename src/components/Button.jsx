import React from "react";
import styled from "styled-components";

export default function Button({ primary, children }) {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  padding: 1em 1.5em;
  font-size: 1.8rem;
  color: ${(props) => (props.primary ? "red" : "cyan")};
  outline: none;
  border: none;
  margin-bottom:1em;
  background-color: green;
`;
