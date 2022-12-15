import styled from 'styled-components';

export const selectStyles = {
  control: (provided) => ({
    ...provided,
    border: "none",
    textAlign: "center",
    background: "none",
    borderColor: "#7721c1",
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

  IndicatorsContainer: (provided) => ({
    ...provided,
    display: "none",
  }),

  placeholder: (provided) => ({
    ...provided,
    display: "none",
  }),
};



export const StyledHeaderSelect = styled.div`
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


