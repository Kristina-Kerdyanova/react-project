import React from 'react'
import Select from 'react-select';
import { selectStyles, StyledHeaderSelect } from './HeaderSelect';


const options = [
  { value: "Tashkent", label: "Ташкент" },
  { value: "", label: "" },
];

export const HeaderSelectMap = () => {
  return (
    <StyledHeaderSelect>
      <Select options={options}
        styles={selectStyles}
        defaultValue={options[0]}
        isMulti={false}
      />
    </StyledHeaderSelect>
  )
}