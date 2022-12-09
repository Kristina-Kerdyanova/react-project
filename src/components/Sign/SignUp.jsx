import React from "react"
import Facebook from "../../assets/icons/facebook.svg";
import Google from "../../assets/icons/google.svg";
import Close from "../../assets/icons/close.svg";
import { ButtonClose, ContainerCheckbox, ContainerInput, ContainerInputName, ContainerSocial, SignInContainer, SignInHeader, SignInTitle, SignInTitleHeader, SignUpText, StyledFormSignUp, StyledLinkSocial, StyledSignUpButton, StyledSignUpInput, StyledSignUpInputCheck, StyledSignUpLink } from "./style";

export const SignUp = () => {

  return (
    <SignInContainer>
      <SignInHeader>
        <SignInTitleHeader>Регистрация</SignInTitleHeader>
        <ButtonClose>
          <img src={Close} alt="close" />
        </ButtonClose>
      </SignInHeader>
      <SignInTitle>Регистрация</SignInTitle>
      <ContainerSocial>
        <StyledLinkSocial href=""><img src={Google} alt="google" /></StyledLinkSocial>
        <StyledLinkSocial href=""><img src={Facebook} alt="facebook" /></StyledLinkSocial>
      </ContainerSocial>
      <StyledFormSignUp>
        <ContainerInput>
          <ContainerInputName>
            <StyledSignUpInput
              type="text"
              placeholder="Имя" />
            <StyledSignUpInput
              type="text"
              placeholder="Фамилия" />
          </ContainerInputName>
          <StyledSignUpInput
            type="password"
            placeholder="Пароль" />
          <StyledSignUpInput
            type="password"
            placeholder="Подтверждение пароля" />
          <StyledSignUpInput
            type="email"
            placeholder="Ваш e-mail" />
          <ContainerCheckbox>
            <StyledSignUpInputCheck type="checkbox" />
            <SignUpText> Я принимаю условия 
              <StyledSignUpLink href="">
                пользовательского соглашения
              </StyledSignUpLink>
            </SignUpText>
          </ContainerCheckbox>
        </ContainerInput>
        <StyledSignUpButton type="submit">Регистрация</StyledSignUpButton>
      </StyledFormSignUp>
    </SignInContainer>
  )
};