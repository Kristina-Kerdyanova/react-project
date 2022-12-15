import React from 'react'
import Select from 'react-select';
import styled from 'styled-components';
import { selectStyles } from './HeaderSelect';


const options = [
  { value: "sign_in", label: "Вход" },
  { value: "sign_up", label: "Регистрация" },
];
export const HeaderSelectAutorization = () => {
  return (
    <StyledHeaderSelectAutorization>
      <Select options={options}
        styles={selectStyles}
        defaultValue={options[0]}
        isMulti={false}
      />
    </StyledHeaderSelectAutorization>
  )
}

const StyledHeaderSelectAutorization = styled.div`
  border: solid 0px;
  width: 151px;
`;

// export class SubheaderAuthorization extends React.Component {
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
//       <StyledFormAuthorization onSubmit={this.handleSubmit}>
//         <StyledSelectAuthorization value={this.state.value} onChange={this.handleChange}>
//           <StyledOptionAuthorization value="sign_in">Вход</StyledOptionAuthorization>
//           <StyledOptionAuthorization value="sign_up">Регистрация</StyledOptionAuthorization>
//         </StyledSelectAuthorization>
//       </StyledFormAuthorization>
//     );
//   }
// }
