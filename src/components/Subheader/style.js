import styled from "styled-components";

const StyledSubheader = styled.div`
  min-width: 1440px;
  width: 100%;
  height: 48px;
  background: #ffffff;
  box-shadow: inset 0px 4px 32px rgba(119, 33, 193, 0.26);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const StyledSubheaderContainer = styled.div`
  width: 1140px;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

const StyledSubheaderElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledSubheaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 244px;
  width: 100%;
`;

const StyledSubheaderElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 8px;
`;

const StyledSubheaderText = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #7721c1;
`;

const StyledSubheaderTextBold = styled.h4`
  font-size: 12px;
  color: #7721c1;
  margin: 0 8px;
`;

const HeaderSelectTitle = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #7721c1;
`;

export {
  StyledSubheader,
  StyledSubheaderBlock,
  StyledSubheaderContainer,
  StyledSubheaderElement,
  StyledSubheaderElementContainer,
  StyledSubheaderText,
  StyledSubheaderTextBold,
  HeaderSelectTitle,
};
