import React from "react"
import Facebook from "../../assets/icons/facebook.svg";
import Google from "../../assets/icons/google.svg";
import Close from "../../assets/icons/close.svg";
import { ButtonClose, ContainerCheckbox, ContainerInput, ContainerSocial, SignInContainer, SignInHeader, SignInText, SignInTitle, SignInTitleHeader, StyledFormSignIn, StyledLinkSocial, StyledSignInLink, StyledSignUpButton, StyledSignUpInput, StyledSignUpInputCheck } from "./style";

export const SignIn = () => {

  return (
    <SignInContainer>
      <SignInHeader>
        <SignInTitleHeader>Вход</SignInTitleHeader>
        <ButtonClose>
          <img src={Close} alt="close" />
        </ButtonClose>
      </SignInHeader>
      <SignInTitle>Вход</SignInTitle>
      <StyledFormSignIn>
        <ContainerInput>
          <StyledSignUpInput
            type="email"
            placeholder="Ваш e-mail" />
          <StyledSignUpInput
            type="password"
            placeholder="Пароль" />
          <ContainerCheckbox>
            <StyledSignUpInputCheck type="checkbox" />
            <SignInText>Запомнить меня</SignInText>
          </ContainerCheckbox>
        </ContainerInput>
        <StyledSignUpButton type="submit">Войти</StyledSignUpButton>
        <StyledSignInLink href="">Регистрация</StyledSignInLink>
        <ContainerSocial>
          <StyledLinkSocial href=""><img src={Google} alt="google" /></StyledLinkSocial>
          <StyledLinkSocial href=""><img src={Facebook} alt="facebook" /></StyledLinkSocial>
        </ContainerSocial>
      </StyledFormSignIn>
    </SignInContainer>
  )
};