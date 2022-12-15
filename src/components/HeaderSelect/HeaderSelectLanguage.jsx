import React from 'react'
import Select from 'react-select';
import { selectStyles, StyledHeaderSelect } from "./HeaderSelect"


const language = [
  { value: "Russian", label: "Русский" },
  { value: "Uzbek", label: "Узбекский" },
];

export const HeaderSelectLanguage = () => {
  return (
    <StyledHeaderSelect>
      <Select options={language}
        styles={selectStyles}
        defaultValue={language[0]}
        isMulti={false}
      />
    </StyledHeaderSelect>
  )
}