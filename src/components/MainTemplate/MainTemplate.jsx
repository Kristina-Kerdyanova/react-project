import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import { StyledMainTemplate } from './style'

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </StyledMainTemplate>
  )
}
