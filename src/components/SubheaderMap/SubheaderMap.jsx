import React from 'react'
import { StyledFormMap, StyledOptionMap, StyledSelectMap } from './style';

export class SubheaderMap extends React.Component {
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
      <StyledFormMap onSubmit={this.handleSubmit}>
        <StyledSelectMap value={this.state.value} onChange={this.handleChange}>
          <StyledOptionMap value="Tashkent">Ташкент</StyledOptionMap>
          <StyledOptionMap value="Samarkand">Самарканд</StyledOptionMap>
        </StyledSelectMap>
      </StyledFormMap>
    );
  }
}
