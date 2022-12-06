import styled from "styled-components";

const StyledFooterNavigation = styled.div`
  width: 100%;
  background: #7721c1;
  color: #ffffff;
  @media (max-width: 1000px) {
  }
`;

const FooterNavigationContainer = styled.div`
  max-width: 1116px;
  min-height: 491px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 70px;

  @media (max-width: 1000px) {
    max-width: 414px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const BlockFooterNavigation = styled.div`
  min-height: 256px;
  @media (max-width: 1000px) {
    &:first-child {
      margin-bottom: 77px;
    }
    margin-bottom: 50px;
  }
`;

const TitleFooterNavigation = styled.p`
  font-weight: 700;
  font-size: 29px;
  line-height: 34px;
  margin-bottom: 23px;
`;

const ListFooterNavigation = styled.ul``;

const ItemFooterNavigation = styled.li`
  margin-bottom: 19px;
`;

const LinkFooterNavigation = styled.a`
  text-decoration: none;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  opacity: 0.72;
`;

const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  max-height: 97px;
  font-weight: 200;
  font-size: 15px;
  line-height: 18px;
  margin-top: 43px;
`;

const TextContentFooter = styled.p`
  font-weight: 500;
`;

const TextContent = styled.p`
  font-weight: 200;
  opacity: 0.72;
`;

const BlockFooterNavigationContent = styled.div`
  @media (max-width: 1000px) {
    &:first-child {
      margin-bottom: 77px;
    }
    margin-bottom: 50px;
  }
`;

const ContainerContentText = styled.div`
  margin-left: 15px;
`;

const FooterBtn = styled.button`
  display: none;
  width: 100%;
  min-height: 66px;
  background: #7721c1;
  box-shadow: inset 0px 4px 16px rgba(0, 0, 0, 0.3);
  border: none;
  font-weight: 700;
  font-size: 29px;
  line-height: 34px;
  color: #ffffff;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const BurgerMenu = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 809px;
  width: 100%;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const TextButton = styled.p`
  padding: 15px
`;


export {
  StyledFooterNavigation,
  FooterNavigationContainer,
  BlockFooterNavigation,
  TitleFooterNavigation,
  LinkFooterNavigation,
  ListFooterNavigation,
  ItemFooterNavigation,
  ContainerContent,
  TextContent,
  TextContentFooter,
  BlockFooterNavigationContent,
  ContainerContentText,
  FooterBtn,
  BurgerMenu,
  TextButton
};
