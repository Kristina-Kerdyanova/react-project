import React from "react"
import { OptionHeaderSelect, StyledFormHeaderSelect, StyledHeaderSelect } from "./style";

const content = [
  {
    language: [
      { value: "Russian", option: "Русский" },
      { value: "Uzbek", option: "Узбекский" },
    ]
  },
  {
    currency: [
      { value: "Russian", option: "Русский" },
      { value: "Uzbek", option: "Узбекский" },
    ]
  }
];

export class HeaderSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
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
      <StyledFormHeaderSelect onSubmit={this.handleSubmit}>
        <StyledHeaderSelect value={this.state.value} onChange={this.handleChange}>
          {content.map((item) => (
            <OptionHeaderSelect value={content.value}>{item.option}</OptionHeaderSelect>
          ))}
        </StyledHeaderSelect>
      </StyledFormHeaderSelect>
    );
  }
}


