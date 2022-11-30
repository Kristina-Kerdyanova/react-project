import styled from 'styled-components';

// Card Wrapper
const StyledCardItem = styled.div`
    max-width: 265px;
    min-height:499px;
    display: flex;
    flex-direction: column;
`

// Card Title
const StyledTitleCardItem = styled.h4`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #7721C1;
    margin: 18px 0 36px;
`

const StyledHintNewTitleCardItem = styled.span`
    background: #4BC121;
box-shadow: inset 0px 4px 33px rgba(0, 0, 0, 0.28);
border-radius: 19px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
color: #FFFFFF;
padding: 2px 5px;
`
const StyledHintHitTitleCardItem = styled.span`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
color: #FFFFFF;
background: #F79E1B;
box-shadow: inset 0px 4px 33px rgba(0, 0, 0, 0.28);
border-radius: 19px;
padding: 2px 18px;
`

// Card Price
const StyledPriceContent = styled.div`
width: 100%;

`
const StyledPriceCardItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
`

const StyledMainPriceCardItem = styled.h2`
    font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 30px;
color: #000000;
`

const StyledOldPriceCardItem = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
text-decoration-line: line-through;
color: rgba(119, 33, 193, 0.44);
`
const StyledStartsCardItem = styled.div`
display: flex;
gap: 4px;
`

const StyledLinkCardItem = styled.a`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
text-decoration-line: underline;
color: #7721C1;
width: 100%;
text-align: center;
`

const StyledIconsCardItem = styled.div`
background: #FFFFFF;
box-shadow: inset 0px 4px 22px rgba(0, 0, 0, 0.25);
border-radius: 23px;
display: flex;
justify-content: space-around;
`

export{
    StyledCardItem,
    StyledTitleCardItem,
    StyledHintNewTitleCardItem,
    StyledHintHitTitleCardItem,
    StyledPriceCardItem,
    StyledMainPriceCardItem,
    StyledOldPriceCardItem,
    StyledStartsCardItem,
    StyledLinkCardItem,
    StyledIconsCardItem,
    StyledPriceContent,
}