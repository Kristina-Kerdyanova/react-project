import React from 'react'
import { CategoriesSidebarBlock, CategoriesSidebarContainerInput, CategoriesSidebarInput, CategoriesSidebarItem, CategoriesSidebarLabel, CategoriesSidebarList, CategoriesSidebarTitle, StyledCategoriesSidebar } from './style'

const mechanism = [
  { option: "Аккордеон", label: "accordion" },
  { option: "Дельфин", label: "dolphin" },
  { option: "Книжка", label: "book" },
  { option: "Еврокнижка", label: "eurobook" },
  { option: "Конард", label: "conard" },
  { option: "Ножницы", label: "scissors" },
  { option: "Пантограф", label: "pantograph" },
  { option: "Софа", label: "sofa" },
]

const brand = [
  { option: "Бренд 1", label: "brand 1" },
  { option: "Бренд 2", label: "brand 2" },
  { option: "Бренд 3", label: "brand 3" },
  { option: "Бренд 4", label: "brand 4" },
]

const width = [
  { option: "До 120", label: "120" },
  { option: "От 121 до 150", label: "150" },
  { option: "От 161 до 165", label: "165" },
  { option: "От 166", label: "brand 166" },
]

const length = [
  { option: "До 190", label: "190" },
  { option: "От 191 до 200", label: "200" },
  { option: "От 201", label: "201" },
]

export const CategoriesSidebar = () => {
  return (
    <StyledCategoriesSidebar>
      <CategoriesSidebarBlock>
        <CategoriesSidebarTitle>Прямые диваны</CategoriesSidebarTitle>
      </CategoriesSidebarBlock>
      <CategoriesSidebarBlock>
      <CategoriesSidebarTitle>Угловые диваны</CategoriesSidebarTitle>
      </CategoriesSidebarBlock>
      <CategoriesSidebarBlock>
        <CategoriesSidebarTitle>Цена</CategoriesSidebarTitle>
      </CategoriesSidebarBlock>
      <CategoriesSidebarBlock>
        <CategoriesSidebarTitle>Механизм раскладки</CategoriesSidebarTitle>
        <CategoriesSidebarList>
          <CategoriesSidebarItem>
            {mechanism.map((item) => (
              <CategoriesSidebarContainerInput>
                <CategoriesSidebarInput type="checkbox" id={item.label} />
                <CategoriesSidebarLabel for={item.label}>
                  {item.option}
                </CategoriesSidebarLabel>
              </CategoriesSidebarContainerInput>
            ))}
          </CategoriesSidebarItem>
        </CategoriesSidebarList>
      </CategoriesSidebarBlock>
      <CategoriesSidebarBlock>
        <CategoriesSidebarTitle>Бренд</CategoriesSidebarTitle>
        <CategoriesSidebarList>
          <CategoriesSidebarItem>
            {brand.map((item) => (
              <CategoriesSidebarContainerInput>
                <CategoriesSidebarInput type="checkbox" id={item.label} />
                <CategoriesSidebarLabel for={item.label}>
                  {item.option}
                </CategoriesSidebarLabel>
              </CategoriesSidebarContainerInput>
            ))}
          </CategoriesSidebarItem>
        </CategoriesSidebarList>
      </CategoriesSidebarBlock>
      <CategoriesSidebarBlock>
        <CategoriesSidebarTitle>Ширина см.</CategoriesSidebarTitle>
        <CategoriesSidebarList>
          <CategoriesSidebarItem>
            {width.map((item) => (
              <CategoriesSidebarContainerInput>
                <CategoriesSidebarInput type="checkbox" id={item.label} />
                <CategoriesSidebarLabel for={item.label}>
                  {item.option}
                </CategoriesSidebarLabel>
              </CategoriesSidebarContainerInput>
            ))}
          </CategoriesSidebarItem>
        </CategoriesSidebarList>
      </CategoriesSidebarBlock>
      <CategoriesSidebarBlock>
        <CategoriesSidebarTitle>Длина см.</CategoriesSidebarTitle>
        <CategoriesSidebarList>
          <CategoriesSidebarItem>
            {length.map((item) => (
              <CategoriesSidebarContainerInput>
                <CategoriesSidebarInput type="checkbox" id={item.label} />
                <CategoriesSidebarLabel for={item.label}>
                  {item.option}
                </CategoriesSidebarLabel>
              </CategoriesSidebarContainerInput>
            ))}
          </CategoriesSidebarItem>
        </CategoriesSidebarList>
      </CategoriesSidebarBlock>
    </StyledCategoriesSidebar>
  )
}
