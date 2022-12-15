import React from 'react'
import { HeaderSelectTitle, StyledSubheader, StyledSubheaderBlock, StyledSubheaderContainer, StyledSubheaderElement } from './style'
import { HeaderSelectAutorization } from '../HeaderSelect/HeaderSelectAutorization';
import { HeaderSelectCurrency } from '../HeaderSelect/HeaderSelectCurrency';
import { HeaderSelectLanguage } from '../HeaderSelect/HeaderSelectLanguage';
import { HeaderSelectMap } from '../HeaderSelect/HeaderSelectMap';

export const Subheader = () => {
  return (
    <StyledSubheader>
      <StyledSubheaderContainer>
        <StyledSubheaderElement>
          <HeaderSelectAutorization />
        </StyledSubheaderElement>
        <HeaderSelectMap />
        <StyledSubheaderBlock>
          <StyledSubheaderElement>
            <HeaderSelectTitle>Язык</HeaderSelectTitle>
            <HeaderSelectLanguage />
          </StyledSubheaderElement>
          <StyledSubheaderElement>
            <HeaderSelectTitle>Валюта</HeaderSelectTitle>
            <HeaderSelectCurrency />
          </StyledSubheaderElement>
        </StyledSubheaderBlock>
      </StyledSubheaderContainer>
    </StyledSubheader>
  )
}
