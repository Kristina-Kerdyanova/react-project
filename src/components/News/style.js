import styled from 'styled-components';

const StyledNewsContainer = styled.div`
box-sizing: border-box;
width: 100%;
`

const StyledNewsHeader = styled.div`
width: 100%;

`
const StyledNewsContent = styled.div`
display: flex;
justify-content: space-between;
width: 100%;

`

const StyledNewsWrapper = styled.div`
display: flex;
max-width: 1140px;
flex-direction: column;
align-items: center;
`
export{
    StyledNewsContainer,
    StyledNewsContent,
    StyledNewsHeader,
    StyledNewsWrapper,
}