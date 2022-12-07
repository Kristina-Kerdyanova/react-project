import styled from "styled-components";

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 630px;
  width: 100%;
  margin: auto;
`;

const SignInHeader = styled.div`
  width: 100%;
  padding: 0 37px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #7721c1;
  min-height: 81px;
  margin-bottom: 24px;
`;

const SignInTitleHeader = styled.p`
  color: #ffffff;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
`;

const ButtonClose = styled.button`
  background: none;
  border: none;
`;

const StyledFormSignIn = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 292px;
  width: 100%;
`;

const StyledFormSignUp = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 439px;
  width: 100%;
`;

const SignInTitle = styled.p`
  font-weight: 700;
  font-size: 29px;
  line-height: 34px;
  text-align: center;
  color: #7721c1;
  margin-bottom: 25px;
`;

const ContainerInputName = styled.div`
  display: flex;
  align-items: stretch;
`;

const ContainerInput = styled.div``;

const StyledSignUpInput = styled.input`
  width: 100%;
  border: none;
  background: #ffffff;
  box-shadow: inset 0px 4px 26px rgba(119, 33, 193, 0.4);
  border-radius: 35px;
  margin-bottom: 25px;
  min-height: 43px;

  &::placeholder {
    font-family: Roboto;
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    color: rgba(119, 33, 193, 0.75);
    padding-left: 28px;
  }
`;

const ContainerCheckbox = styled.div`
  display: flex;
  margin-bottom: 22px;
`;

const StyledSignUpInputCheck = styled.input``;

const SignInText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #7721c1;
  margin-left: 11px;
`;

const SignUpText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #000000;
  margin-left: 10px;
`;

const StyledSignUpButton = styled.button`
  min-height: 33px;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: #ffffff;
  background: rgba(119, 33, 193, 0.75);
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.35);
  border-radius: 17px;
  border: none;
  padding: 0 38px;
  margin-bottom: 8px;
`;

const StyledSignInLink = styled.a`
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #7721c1;
  margin-bottom: 12px;
`;

const StyledSignUpLink = styled.a`
  margin-left: 3px;
`;

const ContainerSocial = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 81px;
  width: 100%;
  margin-bottom: 20px;
`;

const StyledLinkSocial = styled.a``;

export {
  StyledFormSignIn,
  StyledSignUpButton,
  SignInHeader,
  SignInTitle,
  StyledSignUpInput,
  StyledLinkSocial,
  SignInContainer,
  SignInTitleHeader,
  ButtonClose,
  StyledSignUpInputCheck,
  ContainerInput,
  SignInText,
  ContainerCheckbox,
  ContainerSocial,
  ContainerInputName,
  StyledFormSignUp,
  StyledSignInLink,
  StyledSignUpLink,
  SignUpText,
};
