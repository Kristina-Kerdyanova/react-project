import styled from 'styled-components';

const StyledBodyNavWrapper = styled.div`
display: flex;
flex-direction: column;
max-width: 1140px;
width: 100%;
margin: 0 auto;
`

const StyledBodyNavHead = styled.h2`
font-weight: 700;
font-size: 39px;
line-height: 46px;
color: #7721C1;
margin: 0;
display: flex;
align-items: center;
`
const StyledBodyNavEllements = styled.div`
display: flex;
gap: 40px;

`

const StyledBodyNavSell = styled.button`
font-weight: 500;
font-size: 21px;
color: rgba(119, 33, 193, 0.75);
border: 3px solid #fff;
border-radius: 31px;
padding: 7px 12px;
transition: .7s;
background: #fff;

&:active{
    border: 3px solid #7721C1;
}
`

const StyledBodyNavHover = styled.h4`
border: 3px solid #7721C1;
`
const StyledBodyNavText = styled.div`
display: flex;
justify-content: space-between;
`
const StyledBodyNavBorder = styled.div`
background: #FFFFFF;
box-shadow: inset 0px 4px 17px rgba(119, 33, 193, 0.62);
border-radius: 20px;
width: 100%;
height: 10px;
margin-bottom: 46px;
`

export { 
    StyledBodyNavSell,
    StyledBodyNavHead,
    StyledBodyNavEllements,
    StyledBodyNavWrapper,
    StyledBodyNavHover,
    StyledBodyNavBorder,
    StyledBodyNavText,
}