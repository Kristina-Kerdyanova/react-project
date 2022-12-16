import styled from "styled-components";

const ContainerStockTime = styled.div`
  max-width: 173px;
  width: 100%;
  margin-right: 29px;
`;

const ContentStockTime = styled.div`
  display: flex;
`;

const ContainerContentStockTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 6px;
  &:last-child {
    margin-right: 0px;
  }
`;

const TimeStockElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 39px;
  min-height: 30px;
  background: #7721c1;
  border-radius: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #ffffff;
  margin-bottom: 5px;
`;

const TitleStockElement = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  color: #7721c1;
`;

export {
  ContainerContentStockTime,
  ContentStockTime,
  ContainerStockTime,
  TimeStockElement,
  TitleStockElement,
};
