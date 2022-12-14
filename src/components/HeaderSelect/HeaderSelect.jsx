import React from "react"
import Select from 'react-select';
import styled from 'styled-components';


const options = [
  { value: "Russian", label: "Русский" },
  { value: "Uzbek", label: "Узбекский" },
];



export const HeaderSelect = () => {
  const selectStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
      textAlign: "center",
      background: "none",
    }),

    singleValue: (provided) => ({
      ...provided,
      color: "#7721c1",
      fontWeight: "400",
      fontSize: "13px",
      lineHeight: "15px",
      fontFamily: "Roboto",
      appearance: "none",
    }),

    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
  };

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

const StyledHeaderSelect = styled.div`
  border: solid 0px;
`;



// const content = [
//   {
//     language: [
//       { value: "Russian", option: "Русский" },
//       { value: "Uzbek", option: "Узбекский" },
//     ]
//   },
//   {
//     currency: [
//       { value: "uzs", option: "СУМ/UZS" },
//       { value: "", option: "" },
//     ]
//   }
// ];

// export class HeaderSelect extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "" };
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
//       <StyledFormHeaderSelect onSubmit={this.handleSubmit}>
//         <StyledHeaderSelect value={this.state.value} onChange={this.handleChange}>
//           {content.map((item) => (
//             <OptionHeaderSelect value={item.value}>{item.option}</OptionHeaderSelect>
//           ))}
//         </StyledHeaderSelect>
//       </StyledFormHeaderSelect>
//     );
//   }
// }


