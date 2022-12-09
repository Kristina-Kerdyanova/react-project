import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1116px;
  min-height: 103px;
  width: 100%;
  margin: auto;
  @media (max-width: 750px) {
    max-width: 390px;
    flex-direction: column;
    text-align: center;
  }
`;

const StyledTextFooter = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
  @media (max-width: 750px) {
    margin-top: 44px;
    margin-bottom: 36px;
  }
`;

const ContainerFooterPay = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 234px;
  width: 100%;
`;

export { StyledFooter, StyledTextFooter, ContainerFooterPay };
