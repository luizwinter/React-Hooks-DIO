import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import bgImg from '../../images/myers.png';
import Quotes from '../../components/Quotes/Quotes';
import getQuote from '../../services/quoteService/quoteServices.js';
import backtTrack from '../../sounds/michael-myers-tier-3-sound.mp3';

const audio = new Audio(backtTrack);

function App(){
    const isMounted = useRef(true);

    const {quoteState, setQuoteState} = useState({ quote: 'Loading', speaker: 'Wait'});

    const onUpdate = async () => {
        audio.play();

        const quote = await getQuote();

        setQuoteState(quote);

    }; 

    useEffect(()=>{
        onUpdate();

        return() =>{
            console.log(isMounted.current);
        };


    }, [])


    return ( 
        <Content onLoad= {() => onUpdate()}>
            <Quotes {...quoteState} onUpdate={onUpdate}/>
            <MayersImg src={bgImg} alt="Background Image"/>
        </Content>

    );
};

//Styled components

const Content = styled.div`
    height: 100vh;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MayersImg = styled.img`
    max-width: 50vw;
    align-self: flex-end;
`;

export default App;