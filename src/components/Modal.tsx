import styled from "styled-components";

interface IModal {
  component: React.ReactNode;
}

function Modal({ component }: IModal) {
  return (
    <ModalContainer>
      <Wrapper>{component}</Wrapper>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  background-color: #fff;
  z-index: 999;
  width: fit-content;
  height: fit-content;
  max-height: 90vh;
  border-radius: 5px;
  overflow: auto;
`;

export default Modal;
