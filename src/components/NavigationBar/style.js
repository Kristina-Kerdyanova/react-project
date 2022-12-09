import styled from "styled-components";

const ContainerNavigation = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  font-weight: 700;
`;

const ContainerTabNavigation = styled.div`
  display: flex;
`;

const TabItem = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  background-color: inherit;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  overflow: hidden;
`;

const StyledTabNavigation = styled.div`
  overflow: hidden;
`;

const ButtonTabNavigation = styled.button`
  font-family: "Roboto";
  font-weight: 700;
  color: #7721c1;
  opacity: 0.75;
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
  }
`;

const TabCoontentNavigation = styled.div`
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
`;

const StyledNavigationBar = styled.div`
  display: flex;
  align-items: center;
  max-width: 1140px;
  width: 100%;
  min-height: 71px;
  margin: auto;
  background: none;
  box-shadow: inset 0px 4px 30px rgba(119, 33, 193, 0.24);
  border-radius: 52px;
`;

const ButtonNavigation = styled.button`
  background: #ffffff;
  border: none;
  border-radius: 52px;
  min-height: 71px;
  max-width: 281px;
  width: 100%;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  color: #7721c1;
`;

export {
  StyledTabNavigation,
  ButtonTabNavigation,
  TabCoontentNavigation,
  ContainerNavigation,
  TabItem,
  StyledNavigationBar,
  ButtonNavigation,
  ContainerTabNavigation,
};
