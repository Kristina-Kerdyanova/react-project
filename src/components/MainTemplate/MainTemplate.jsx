import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { StyledMainTemplate } from './style'

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Container>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </StyledMainTemplate>
  )
}


const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: auto;
`;