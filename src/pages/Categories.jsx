import React from 'react'
import styled from 'styled-components'
import { CategoriesSidebar } from '../components/CategoriesSidebar/CategoriesSidebar'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { Subscribe } from '../components/Subscribe/Subscribe'
import Home from '../assets/icons/home.svg'
import { CardItem } from '../components/CardItem/CardItem'


export const Categories = () => {
  return (
    <>
      <Header />
      <CategoriesHeaderContainer>
        <CategoriesTitle>Диваны</CategoriesTitle>
        <ContainerContent>
          <LinkHome href='/'>
            <ImageLinkHome src={Home} alt="home" />
          </LinkHome>
          /
          <TextCategory>Диваны</TextCategory>
        </ContainerContent>
      </CategoriesHeaderContainer>
      <StyledCategories>
        <CategoriesSidebar />
        <CategoriesList>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </CategoriesList>
      </StyledCategories>
      <Subscribe />
      <Footer />
    </>
  )
}

const StyledCategories = styled.div`
  display: flex;
  max-width: 1140px;
  margin: auto;
`;

const CategoriesHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1140px;
  width: 100%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  color: #7721C1;
  margin: auto;
  margin-bottom: 24px;
`;

const CategoriesTitle = styled.h2`
  font-size: 39px;
  line-height: 46px;
`;

const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  line-height: 26px;

`;

const LinkHome = styled.a`
  width: 100%;
  margin-right: 8px;
  background: none;
  border: none;
`;

const ImageLinkHome = styled.img`
`;

const TextCategory = styled.p`
  margin-left: 8px;
`;

const CategoriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin: auto;
  margin-bottom: 28px;
`;