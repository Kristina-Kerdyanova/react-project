import styled from "styled-components";

const StyledCategoriesSidebar = styled.div`
  max-width: 262px;
  width: 100%;
  min-height: 1338px;
`;

const CategoriesSidebarBlock = styled.div``;

const CategoriesSidebarTitle = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 25px;
  color: #7721c1;
  margin: 18px auto;
`;

const CategoriesSidebarList = styled.ul``;

const CategoriesSidebarItem = styled.li``;

const CategoriesSidebarContainerInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const CategoriesSidebarInput = styled.input`
  margin-right: 16px;
  width: 25px;
  height: 25px;
  background: #7721c1;
  box-shadow: inset 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  /* display: none; */
`;

const CategoriesSidebarLabel = styled.label`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;
  color: #7721c1;
  /* &::before {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    background: #7721c1;
    box-shadow: inset 0px 4px 6px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
  } */
`;

export {
  StyledCategoriesSidebar,
  CategoriesSidebarBlock,
  CategoriesSidebarItem,
  CategoriesSidebarList,
  CategoriesSidebarTitle,
  CategoriesSidebarInput,
  CategoriesSidebarLabel,
  CategoriesSidebarContainerInput,
};
