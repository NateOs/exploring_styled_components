import React from "react";
import styled from "styled-components";
import Button from "./components/Button";

const App = () => {
  return (
      <MainWrapper>
        <Button primary>My Button</Button>
        <Button >My Button</Button>
      </MainWrapper>
  );
};

export default App;

// styles

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid red;
  display:flex;
  flex-direction: column;
`;