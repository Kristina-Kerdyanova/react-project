import styled from "styled-components";

const StyledSubcribe = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  background: rgba(255, 255, 255, 0.75);
  box-shadow: inset 0px 4px 36px rgba(0, 0, 0, 0.25);
`;

const SubscribeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1140px;
  min-height: 132px;
  width: 100%;
  margin: auto;
  color: #7721c1;
`;

const ContainerSocial = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 315px;
  width: 100%;
`;

const SubscribeText = styled.p`
  max-width: 330px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 133.2%;
`;

const StyledForm = styled.form`
  max-width: 429px;
  min-height: 42px;
  background: #ffffff;
  box-shadow: inset 0px 4px 27px rgba(119, 33, 193, 0.62);
  border-radius: 38px;
`;

const StyledInput = styled.input`
  border: solid 0px;
  background-color: rgba(119, 33, 193, 0);
  padding-left: 26px;
  color: rgba(119, 33, 193, 0.75);
`;

const SubscribeButton = styled.button`
  max-width: 140px;
  min-height: 42px;
  background: #7721c1;
  font-family: Roboto;
  color: #ffffff;
  font-size: 17px;
  font-weight: 700;
  line-height: 20px;
  border-radius: 38px;
  border: none;
  padding: 11px 21px;
`;

export {
  StyledForm,
  StyledInput,
  StyledSubcribe,
  SubscribeButton,
  SubscribeContainer,
  ContainerSocial,
  SubscribeText,
};
