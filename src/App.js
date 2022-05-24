import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./components/Modal";
import { GlobalStyle } from "./globalStyle";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radiu: 4px;
  border: none;
  background: #141414;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
`;
function App() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className="App">
      <Container>
        <Button onClick={openModal}>I am a Modal</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </Container>
    </div>
  );
}

export default App;
