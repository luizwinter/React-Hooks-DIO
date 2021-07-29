import styled from "styled-components";
import { string, func } from 'prop-types';
import Button from '../Button/Button.js'

const Quotes = ({ quote, speaker, onUpdate })=> {
    return(
        <Wrapper>
        <Quote>{quote}</Quote>
        <Speaker>- {speaker}</Speaker>
        <Button onClick={onUpdate}> Click</Button>
        </Wrapper>
    );
};

Quotes.propTypes = {
    quote: string,
    sepaker: string,
    onUpdate: func
};


// Styled components

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

`;


const Quote = styled.p`
    font-size: 2em;
    margin: 0;
`;

const Speaker = styled(Quote)`
    text-align: right;
    margin-bottom: 50px;

`;



export default Quotes;
