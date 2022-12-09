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
`
// export class NavigationSelect extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: 'all' };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <StyledFormNavigation onSubmit={this.handleSubmit}>
//         <StyledSelectNavigation value={this.state.value} onChange={this.handleChange}>
//           <StyledOptionNavigation value="all">Все категории</StyledOptionNavigation>
//           <StyledOptionNavigation value="doors">Двери</StyledOptionNavigation>
//           <StyledOptionNavigation value="windows">Окна</StyledOptionNavigation>
//           <StyledOptionNavigation value="ceilings">Натяжные потолки</StyledOptionNavigation>
//           <StyledOptionNavigation value="sofas">Диваны/кровати</StyledOptionNavigation>
//           <StyledOptionNavigation value="blinds">Жалюзи/ролеты</StyledOptionNavigation>
//           <StyledOptionNavigation value="furniture">Мебель</StyledOptionNavigation>
//           <StyledOptionNavigation value="forged_products">Кованые изделия</StyledOptionNavigation>
//         </StyledSelectNavigation>
//       </StyledFormNavigation>
//     );
//   }
// }