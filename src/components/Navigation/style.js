import styled from "styled-components";

const StyledNavigation = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const StyledNavigationForm = styled.form`
  max-width: 448px;
  width: 100%;
  height: 45px;
  background: #ffffff;
  box-shadow: inset 0px 4px 23px rgba(119, 33, 193, 0.21);
  border-radius: 39px;
  display: flex;
  justify-content: space-between;
`;

const StyledNavigationInput = styled.input`
  border: solid 0px;
  background-color: rgba(119, 33, 193, 0);
`;

const StyledNavigationBtnSearch = styled.button`
  width: 52px;
  height: 45px;
  border: solid 0px;
  border-radius: 13px;
  background: #7721c1;
`;

const StyledNavigationBtnPhone = styled.button`
  border-radius: 13px;
  border: solid 0px;
  background: #ffffff;
`;

const StyledNavigationCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 179px;
  height: 45px;
  background: #ffffff;
  box-shadow: inset 0px 4px 9px rgba(119, 33, 193, 0.21);
  border-radius: 44px;
  padding: 0 13px 0 24px;
`;

const StyledNavigationCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledNavigationCartText = styled.div`
  color: #7721c1;
  margin-right: 6px;
  font-size: 15px;
  line-height: 18px;
`;

const StyledNavigationBtnCart = styled.button`
  border: solid 0px;
  background: rgba(119, 33, 193, 0);
`;


// const StyledNavigationSelect = styled.select`
//   max-width: 151px;
//   width: 100%;
//   height: 45px;
//   border-radius: 35px;
//   border: solid 0px;
//   background: #ffffff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   box-shadow: (0px 4px 26px rgba(0, 0, 0, 0.18));
//   color: #7721c1;
//   margin-right: 6px;
//   font-size: 15px;
//   line-height: 18px;
// `;


export {
  StyledNavigation,
  StyledNavigationBtnCart,
  StyledNavigationBtnPhone,
  StyledNavigationCart,
  StyledNavigationCartContainer,
  StyledNavigationCartText,
  StyledNavigationForm,
  StyledNavigationInput,
  StyledNavigationBtnSearch,
};
