import React from 'react'
import Select from 'react-select';
import { selectStyles, StyledHeaderSelect } from "./HeaderSelect"


const currency = [
  { value: "uzs", label: "СУМ/UZS" },
  { value: "", label: "" },
];

export const HeaderSelectCurrency = () => {
  return (
    <StyledHeaderSelect>
      <Select options={currency}
        styles={selectStyles}
        defaultValue={currency[0]}
        isMulti={false}
      />
    </StyledHeaderSelect>
  )
}