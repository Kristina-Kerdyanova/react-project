import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { Subheader } from '../Subheader/Subheader';
import { StyledHeader } from './style';

export const Header = () => {
  return (
    <StyledHeader>
      <Subheader />
      <Navigation/>
      <NavigationBar/>
    </StyledHeader>
  )
}
