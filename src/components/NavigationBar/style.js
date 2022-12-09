import styled from "styled-components";

const ContainerNavigation = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  font-weight: 700;
  margin-bottom: 52px;
`;

const ContainerTabNavigation = styled.div`
  display: flex;
`;

const TabItem = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 490px;
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
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

const ContainerNavigationBar = styled.div`
  display: flex;
  align-items: center;
  max-width: 1140px;
  width: 100%;
  box-shadow: inset 0px 4px 30px rgba(119, 33, 193, 0.24);
  margin: auto;
  border-radius: 52px;
`;

const StyledNavigationBar = styled.div`
  display: flex;
  align-items: center;
  max-width: 1140px;
  width: 100%;
  min-height: 71px;

  background: none;
`;

const ButtonNavigation = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: none;
  border-bottom-left-radius: 52px;
  border-top-left-radius: 52px;
  min-height: 71px;
  max-width: 281px;
  width: 100%;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #7721c1;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  max-width: 134px;
  text-decoration: none;
`;

const ContainerContent = styled.div`
  text-align: center;
  margin-left: 5px;
`;

const TextLink = styled.p`
  color: #7721c1;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
`;

const TitleLink = styled.p`
  color: #7721c1;
  opacity: 0.75;
  font-weight: 700;
  font-size: 18px;
  line-height: 85.6%;
`;

const ContainerLink = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 377px;
  width: 100%;
`;

const LinkItem = styled.div`
  max-width: 166px;
  width: 100%;
`;

const ButtonTitle = styled.p`
  margin-right: 27px;
`;

const CategoriesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 250px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);
`;

const CategoriesListItem = styled.div`
  display: flex;
  max-width: 197px;
  width: 100%;
  min-height: 33.5px;
`;

const ListText = styled.p``;

const ContainerBody = styled.div`
  display: flex;
  max-width: 1084px;
  width: 100%;
  min-height: 415px;
  margin: auto;
`;

const ContainerTabsContent = styled.div``;

export {
  ContainerTabsContent,
  ContainerBody,
  CategoriesList,
  CategoriesListItem,
  ListText,
  StyledTabNavigation,
  ButtonTabNavigation,
  TabCoontentNavigation,
  ContainerNavigation,
  TabItem,
  StyledNavigationBar,
  ButtonNavigation,
  ContainerTabNavigation,
  StyledLink,
  ContainerContent,
  TextLink,
  TitleLink,
  ContainerLink,
  LinkItem,
  ContainerNavigationBar,
  ButtonTitle,
};
