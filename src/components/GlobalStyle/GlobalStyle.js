import { createGlobalStyle } from "styled-components";
import bbImg from '../../images/darkimg.jpg'

const GlobalStyle = createGlobalStyle`
    body{
        color: white;
        padding: 0;
        margin: 0;
        background-image: url(${bbImg});
        background-size: cover;
    }
 
`;

export default GlobalStyle;