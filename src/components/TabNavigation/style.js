import styled from "styled-components";

const StyledTabNavigation = styled.div`
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
`;

const ButtonTabNavigation = styled.button`
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
`;

const TabCoontentNavigation = styled.div`
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
`;

export { StyledTabNavigation, ButtonTabNavigation, TabCoontentNavigation };
