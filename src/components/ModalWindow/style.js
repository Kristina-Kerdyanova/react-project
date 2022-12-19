import styled from "styled-components";

const ModalWinwowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 630px;
  width: 100%;
  margin: auto;
`;

const ModalWinwowHeader = styled.div`
  max-width: 576px;
  width: 100%;
  padding: 0 37px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #7721c1;
  min-height: 81px;
  margin: auto;
  margin-bottom: 24px;
`;

const ModalWinwowTitleHeader = styled.p`
  color: #ffffff;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
`;

const ButtonClose = styled.button`
  background: none;
  border: none;
`;

export { 
  ModalWinwowContainer, ModalWinwowHeader, ModalWinwowTitleHeader, ButtonClose 
}