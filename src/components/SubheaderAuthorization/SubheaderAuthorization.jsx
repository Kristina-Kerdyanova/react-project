import React from 'react'
import { StyledFormAuthorization, StyledOptionAuthorization, StyledSelectAuthorization } from './style';

export class SubheaderAuthorization extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'all' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <StyledFormAuthorization onSubmit={this.handleSubmit}>
        <StyledSelectAuthorization value={this.state.value} onChange={this.handleChange}>
          <StyledOptionAuthorization value="sign_in">Вход</StyledOptionAuthorization>
          <StyledOptionAuthorization value="sign_up">Регистрация</StyledOptionAuthorization>
        </StyledSelectAuthorization>
      </StyledFormAuthorization>
    );
  }
}
