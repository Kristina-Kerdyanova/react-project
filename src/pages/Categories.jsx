import React from 'react'
import styled from 'styled-components'
import { CategoriesSidebar } from '../components/CategoriesSidebar/CategoriesSidebar'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { Subscribe } from '../components/Subscribe/Subscribe'

export const Categories = () => {
  return (
    <>
      <Header />
      <StyledCategories>
        <CategoriesSidebar />
      </StyledCategories>
      <Subscribe />
      <Footer />
    </>
  )
}

const StyledCategories = styled.div`
  max-width: 1140px;
  margin: auto;
`;

