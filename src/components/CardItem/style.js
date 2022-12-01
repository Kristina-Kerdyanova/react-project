import styled from 'styled-components';

// Card Wrapper
const StyledCardItem = styled.div`
    max-width: 265px;
    min-height:499px;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
`
const StyledCardImgBox = styled.div`
    min-height: 212px;
    min-width: 264px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.18);
    border-radius: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledCardSale = styled.div`
    padding: 9px 4px;
    background: #FF00C7;
    box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 7px;
    max-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:14px;
    right: 21px;
`
const StyledCardSaleText = styled.p`
font-weight: 700;
font-size: 18px;
color: #FFFFFF;
margin: 0;
`
// Card Title
const StyledTitleCardItem = styled.h4`
    font-weight: 700;
    font-size: 20px;
    color: #7721C1;
    margin: 18px 0 36px;
    max-width: 220px;
    margin:18px 0 36px;
`

const StyledHintNewTitleCardItem = styled.span`
    background: #4BC121;
box-shadow: inset 0px 4px 33px rgba(0, 0, 0, 0.28);
border-radius: 19px;
font-weight: 700;
font-size: 12px;
text-align: center;
color: #FFFFFF;
padding: 2px 5px;
gap: 6px;
margin-left: 6px;
margin-right: 6px;
`
const StyledHintHitTitleCardItem = styled.span`
font-weight: 700;
font-size: 12px;
color: #FFFFFF;
background: #F79E1B;
box-shadow: inset 0px 4px 33px rgba(0, 0, 0, 0.28);
border-radius: 19px;
padding: 2px 18px;

text-align: center;
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
    margin-bottom: 10px;
`

const StyledMainPriceCardItem = styled.h2`
font-weight: 700;
font-size: 26px;
color: #000000;
margin: 0;
`

const StyledOldPriceCardItem = styled.p`
font-weight: 700;
font-size: 16px;
text-decoration-line: line-through;
color: rgba(119, 33, 193, 0.44);
margin: 0;
`
const StyledStartsCardItem = styled.div`
display: flex;
gap: 4px;
//width: 75%;
margin-bottom: 29px;
`

const StyledLinkCardItem = styled.a`
font-weight: 700;
font-size: 18px;
text-decoration-line: underline;
color: #7721C1;
width: 100%;
text-align: center;
margin-bottom: 22px;
`

const StyledIconsCardItem = styled.div`
background: #FFFFFF;
box-shadow: inset 0px 4px 22px rgba(0, 0, 0, 0.25);
border-radius: 23px;
display: flex;
justify-content: space-around;
min-height: 66px;
align-items: center;
width: 100%;
`
const StyledCardInfo = styled.div`
display: flex;
flex-direction: column;
width: 85%;



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
    StyledCardImgBox,
    StyledCardSale,
    StyledCardSaleText,
    StyledCardInfo,
}