import React from 'react'
import Facebook from "../../assets/icons/facebook.svg";
import Google from "../../assets/icons/google.svg";
import Close from "../../assets/icons/close.svg";
import { SignInContainer, SignInHeader, SignInTitle, StyledFormSignIn, StyledSignUpButton, StyledSignUpCheckbox, StyledSignUpInput, StyledSignUpLink, StyledSignUpLinkSocial } from './style';

export const SignIn = () => {

  return (
    <SignInContainer>
    <SignInHeader>
      <p>Вход</p>
      <button>
        <img src={Close} alt="close" />
      </button>
    </SignInHeader>
    <SignInTitle>Вход</SignInTitle>
    <StyledFormSignIn>
      <StyledSignUpInput
        type="email"
        placeholder="Email" />
      <StyledSignUpInput
        type="password"
        placeholder="Password" />
      <StyledSignUpButton type="submit">Войти</StyledSignUpButton>
      <StyledSignUpLink>Регистрация</StyledSignUpLink>
      <StyledSignUpLinkSocial><img src={Google} alt="google" /></StyledSignUpLinkSocial>
      <StyledSignUpLinkSocial><img src={Facebook} alt="facebook" /></StyledSignUpLinkSocial>
    </StyledFormSignIn>
    </SignInContainer>
  )
};