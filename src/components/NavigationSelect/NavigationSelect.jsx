import React from 'react'
import { StyledFormNavigation, StyledOptionNavigation, StyledSelectNavigation } from './style';
export class NavigationSelect extends React.Component {
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
      <StyledFormNavigation onSubmit={this.handleSubmit}>
        <StyledSelectNavigation value={this.state.value} onChange={this.handleChange}>
          <StyledOptionNavigation value="all">Все категории</StyledOptionNavigation>
          <StyledOptionNavigation value="doors">Двери</StyledOptionNavigation>
          <StyledOptionNavigation value="windows">Окна</StyledOptionNavigation>
          <StyledOptionNavigation value="ceilings">Натяжные потолки</StyledOptionNavigation>
          <StyledOptionNavigation value="sofas">Диваны/кровати</StyledOptionNavigation>
          <StyledOptionNavigation value="blinds">Жалюзи/ролеты</StyledOptionNavigation>
          <StyledOptionNavigation value="furniture">Мебель</StyledOptionNavigation>
          <StyledOptionNavigation value="forged_products">Кованые изделия</StyledOptionNavigation>
        </StyledSelectNavigation>
      </StyledFormNavigation>
    );
  }
}