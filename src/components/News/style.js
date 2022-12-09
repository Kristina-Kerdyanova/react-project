import styled from 'styled-components';

const StyledNewsContainer = styled.div`
width: 100%;
margin: 0 auto;
`

const StyledNewsHeader = styled.div`
width: 100%;

`
const StyledNewsContent = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin-top: 39px;
`

const StyledNewsWrapper = styled.div`
display: flex;
max-width: 1140px;
flex-direction: column;
align-items: center;
margin: 0 auto;
`
export{
    StyledNewsContainer,
    StyledNewsContent,
    StyledNewsHeader,
    StyledNewsWrapper,
}