import styled from "styled-components";

const StyledDetailsItem = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: auto;
  margin-bottom: 97px;
`;

const StyledHotestContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);
  border-radius: 38px;
  max-width: 1140px;
  padding: 28px 90px;
  margin-top: 29px;
  display: flex;
  justify-content: space-between;
`;

const StyledHotestLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;
const StyledHotestLableContent = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: flex-start;
`;
const StyledHotestStarts = styled.div``;
const StyledHotestLable = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  gap: 25px;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #ffffff;
`;
const StyledHotestLablePink = styled.p`
  background: rgba(255, 0, 199, 0.84);
  box-shadow: inset 0px 4px 33px rgba(0, 0, 0, 0.28);
  border-radius: 19px;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  min-width: 107px;
  height: 40px;
  width: 100%;
`;
const StyledHotestLableGreen = styled.p`
  background: #4bc121;
  box-shadow: inset 0px 4px 33px rgba(0, 0, 0, 0.28);
  border-radius: 19px;
  justify-content: center;
  align-items: center;
  min-width: 107px;
  width: 100%;
  height: 40px;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledHotestLableYellow = styled.p`
  background: #f79e1b;
  box-shadow: inset 0px 4px 33px rgba(0, 0, 0, 0.28);
  border-radius: 19px;
  align-items: center;
  min-width: 107px;
  width: 100%;
  height: 40px;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledHotestRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  position: relative;
  right: 0;
`;
const StyledHotestHeader = styled.h2`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  color: #7721c1;
`;
const StyledHotestPrice = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
  margin: 21px 0 35px;
`;

const StyledHotestPriceMain = styled.p`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  color: #000000;
`;

const StyledHotestPriceOld = styled.p`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-decoration-line: line-through;
  color: rgba(119, 33, 193, 0.44);
`;

const StyledHotestText = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

const StyledHotestTextLink = styled.a`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: underline;
  color: #7721c1;
`;
const StyledHotestAvalible = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledHotestAvalibleText = styled.p`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin: 23px 0 12px;
`;

const StyledHotestLine = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: inset 0px 4px 24px rgba(119, 33, 193, 0.62);
  border-radius: 24px;
  height: 15px;
  margin-bottom: 16px;
`;
const StyledHotestTimeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const StyledHotestTill = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHotestTimer = styled.div`
  display: flex;
`;

const StyledHotestTimerNumber = styled.p`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #ffffff;
`;

const StyledHotestTimerText = styled.p`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  color: #7721c1;
`;

const StyledHotestPrefer = styled.div``;

export {
  StyledHotestContainer,
  StyledHotestAvalible,
  StyledHotestAvalibleText,
  StyledHotestHeader,
  StyledHotestLable,
  StyledHotestLeft,
  StyledHotestPrefer,
  StyledHotestPrice,
  StyledHotestPriceMain,
  StyledHotestPriceOld,
  StyledHotestRight,
  StyledHotestText,
  StyledHotestTextLink,
  StyledHotestTill,
  StyledHotestTimer,
  StyledHotestTimerNumber,
  StyledHotestTimerText,
  StyledDetailsItem,
  StyledHotestLine,
  StyledHotestTimeContainer,
  StyledHotestLableContent,
  StyledHotestLableGreen,
  StyledHotestLablePink,
  StyledHotestLableYellow,
  StyledHotestStarts,
};
