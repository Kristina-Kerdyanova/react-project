import styled from 'styled-components';

const StyledHotestContainer = styled.div`
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);
border-radius: 38px;
max-width: 1140px;
width: 100%;
padding: 28px 90px;
`

const StyledHotestLeft = styled.div`
`
const StyledHotestLable = styled.p`

`
const StyledHotestRight = styled.div`
display: flex;
flex-direction: column;

`
const StyledHotestHeader = styled.h2`
font-family: 'Roboto';
font-weight: 700;
font-size: 36px;
line-height: 42px;
color: #7721C1;
`
const StyledHotestPrice = styled.div`
display: flex; 
gap: 13px;
`

const StyledHotestPriceMain = styled.p`
font-family: 'Roboto';
font-weight: 700;
font-size: 34px;
line-height: 40px;
color: #000000;
`

const StyledHotestPriceOld = styled.p`
font-family: 'Roboto';
font-weight: 700;
font-size: 24px;
line-height: 28px;
text-decoration-line: line-through;
color: rgba(119, 33, 193, 0.44);
`

const StyledHotestText = styled.p`
font-family: 'Roboto';
font-weight: 700;
font-size: 24px;
line-height: 28px;
text-decoration-line: line-through;
color: rgba(119, 33, 193, 0.44);
`

const StyledHotestTextLink = styled.a`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-decoration-line: underline;
color: #7721C1;
`
const StyledHotestAvalible = styled.div`
display: flex;
justify-content: space-between;
`
const StyledHotestAvalibleText = styled.p`
font-family: 'Roboto';
font-weight: 700;
font-size: 18px;
line-height: 21px;
color: #000000;
`

const StyledHotestTill = styled.div`
display: flex;
flex-direction: column;
`

const StyledHotestTimer = styled.div`
display: flex;

`

const StyledHotestTimerNumber = styled.p`
font-family: 'Roboto';
font-weight: 700;
font-size: 22px;
line-height: 26px;
color: #FFFFFF;
`

const StyledHotestTimerText = styled.p`
font-family: 'Roboto';
font-weight: 700;
font-size: 10px;
line-height: 12px;
color: #7721C1;
`

const StyledHotestPrefer = styled.div`
`

export{
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
}