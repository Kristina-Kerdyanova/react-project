import styled from "styled-components";

const StyledCatalog = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 70px;
  margin-bottom: 97px;
`;

const StyledCatalogWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

const StyledCatalogCard = styled.img`
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.18);
  border-radius: 37px;
  transition: 0.7s;
  width: 360px;
  height: 309px;
  &:hover {
    filter: drop-shadow(0px 4px 28px rgba(119, 33, 193, 0.62));
  }
`;

export { StyledCatalog, StyledCatalogCard, StyledCatalogWrapper };
