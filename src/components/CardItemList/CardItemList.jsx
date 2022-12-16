import React from 'react'
import styled from 'styled-components'
import { CardItem } from '../CardItem/CardItem'

export const CardItemList = () => {
  return (
    <StyledCardItemList>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </StyledCardItemList>
  )
}

const StyledCardItemList = styled.div`
  display: flex;
  justify-content: space-between;
`;