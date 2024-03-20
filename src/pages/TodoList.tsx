import { useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";

function TodoList() {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <TodoWrap>sdfasd</TodoWrap>

      {!isShow && <Modal component={<>slkdjflj</>} />}
    </>
  );
}

const TodoWrap = styled.div`
  background-color: ${({ theme }) => theme.mainColor};
  height: 100vh;
`;

export default TodoList;
