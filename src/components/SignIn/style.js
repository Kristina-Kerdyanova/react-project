import styled from "styled-components";

const SignInContainer = styled.div`
  max-width: 630px;
  width: 100%;
`;

const SignInHeader = styled.div``;

const StyledFormSignIn = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 100%;
  max-width: 500px;
  padding: 10px;
`;

const SignInTitle = styled.h3``;

const StyledSignUpInput = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 16px;
  line-height: 20px;
  margin: 20px 0;
  padding: 16px;
  width: 100%;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 5px;
`;

const StyledSignUpCheckbox = styled.input``;

const StyledSignUpButton = styled.button`
`;

const StyledSignUpLink = styled.a``;

const StyledSignUpLinkSocial = styled.a``;

export {
  StyledFormSignIn,
  StyledSignUpButton,
  SignInHeader,
  SignInTitle,
  StyledSignUpCheckbox,
  StyledSignUpInput,
  StyledSignUpLink,
  StyledSignUpLinkSocial,
  SignInContainer,
};
