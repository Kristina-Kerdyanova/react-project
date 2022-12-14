import React from 'react';
// import { StyledFormNavigation, StyledOptionNavigation, StyledSelectNavigation } from './style';


import Select from 'react-select';
import styled from 'styled-components';

const options = [
  { value: "all", label: "Все категории" },
  { value: "doors", label: "Двери" },
  { value: "windows", label: "Окна" },
  { value: "ceilings", label: "Натяжные потолки" },
  { value: "sofas", label: "Диваны/кровати" },
  { value: "blinds", label: "Жалюзи/ролеты" },
  { value: "furniture", label: "Мебель" },
  { value: "forged_products", label: "Кованые изделия" },
]

export const NavigationSelect = () => {
  const selectStyles = {
    control: (provided) => ({
      ...provided,
      height: "45px",
      borderRadius: "35px",
      border: "none",
      textAlign: "center",
    }),

    singleValue: (provided) => ({
      ...provided,
      color: "#7721c1",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "26px",
      fontFamily: "Roboto",
      appearance: "none",
    }),

    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
  };
  return (
    <StyledSelect>
      <Select options={options}
        styles={selectStyles}
        defaultValue={options[0]}
        isMulti={false}
      />
    </StyledSelect>
  );
}

const StyledSelect = styled.div`
  border-radius: 35px;
  border: solid 0px;
  box-shadow: (0px 4px 26px rgba(0, 0, 0, 0.18));
`;