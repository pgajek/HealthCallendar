import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,600,700&display=swap');

*, *::before, *::after{
   box-sizing: border-box;
   margin: 0;
   padding: 0;
}
html{
    font-size: 62.5%;
}

body{
    min-height: 100vh;
display: flex;
align-items: stretch;
justify-content: stretch;
    width: 100vw;
    font-family: "Montserrat", sans-serif;
    font-size: 1.6rem;
    background-color: #DCDCDC;

    @media (min-width: 1024px){
        padding: 3% 0;
    }
}
`;
export default GlobalStyle;
