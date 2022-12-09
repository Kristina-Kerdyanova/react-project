import styled from "styled-components";
import ArrowViolet from "../../assets/icons/arrow_violet.svg"

const StyledFormNavigation = styled.form`
`;

const StyledSelectNavigation = styled.select`
  max-width: 151px;
  width: 100%;
  height: 45px;
  border-radius: 35px;
  border: solid 0px;
  background: #ffffff;
  box-shadow: (0px 4px 26px rgba(0, 0, 0, 0.18));
  color: #7721c1;
  font-size: 15px;
  line-height: 18px;
  appearance: none;
  background-image: url(${ArrowViolet});
  background-repeat: no-repeat;
  background-position: right 1em top 50%, 0 0;
  margin: auto;
  padding: 0 18px;
`;

const StyledOptionNavigation = styled.option`
  
`;

export { StyledFormNavigation, StyledSelectNavigation, StyledOptionNavigation };
