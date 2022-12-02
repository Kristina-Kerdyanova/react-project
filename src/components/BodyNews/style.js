import styled from 'styled-components';
const StyledBodyNewsWrapper = styled.div`
max-width:330px;
display: flex;
flex-direction: column;
align-items: center;
`

const StyledBodyNewsImg = styled.img`
background: #C4C4C4;
border-radius: 22px;
filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.35));
`

const StyledBodyNewsInfo = styled.div`
display: flex;
justify-content: space-between;
min-width: 300px;
align-items: center;
`
const StyledBodyNewsInfoText = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: #999494;
margin: 17px 0 0;
`

const StyledBodyNewsTitle = styled.h3`
margin: 10px 0 12px;
font-weight: 700;
font-size: 28px;
line-height: 33px;
color: #7721C1;
min-width:300px;
`

const StyledBodyNewsContent = styled.p`
font-weight: 400;
font-size: 15px;
line-height: 18px;
color: #000000;
max-width: 300px;
margin: 0;
`

const StyledBodyNewsButton = styled.a`
font-weight: 700;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
background: rgba(119, 33, 193, 0.75);
border-radius: 31px;
padding: 15px 35px;
display: flex;
align-items: center;
justify-content: center;
width: 50%;

margin-top: 42px;
`

export{
    StyledBodyNewsWrapper,
    StyledBodyNewsImg,
    StyledBodyNewsInfo,
    StyledBodyNewsInfoText,
    StyledBodyNewsTitle,
    StyledBodyNewsContent,
    StyledBodyNewsButton,
}