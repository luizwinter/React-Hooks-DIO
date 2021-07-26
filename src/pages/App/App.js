import styled from 'styled-components';
import bgImg from '../../images/myers.png';
import Quotes from '../../components/Quotes/Quotes';

function App(){
    return ( 
        <Content>
            <Quotes quote="test quote" speaker="random speaker"/>
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