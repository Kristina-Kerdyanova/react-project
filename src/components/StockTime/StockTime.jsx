import React from 'react'
import { ContentStockTime, ContainerStockTime, TimeStockElement, TitleStockElement, ContainerContentStockTime } from './style'


export const StockTime = () => {
  return (
    <ContainerStockTime>
      <ContentStockTime>
        <ContainerContentStockTime>
          <TimeStockElement>2</TimeStockElement>
          <TitleStockElement>Дней</TitleStockElement>
        </ContainerContentStockTime>
        <ContainerContentStockTime>
          <TimeStockElement>13</TimeStockElement>
          <TitleStockElement>Часов</TitleStockElement>
        </ContainerContentStockTime>
        <ContainerContentStockTime>
          <TimeStockElement>20</TimeStockElement>
          <TitleStockElement>Минут</TitleStockElement>
        </ContainerContentStockTime>
        <ContainerContentStockTime>
          <TimeStockElement>34</TimeStockElement>
          <TitleStockElement>Секунд</TitleStockElement>
        </ContainerContentStockTime>
      </ContentStockTime>
    </ContainerStockTime >
  )
}
