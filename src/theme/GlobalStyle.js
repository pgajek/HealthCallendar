import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Architects+Daughter|Lato:400,700,900&display=swap&subset=latin-ext');

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
    font-family: "Lato", sans-serif;
    font-size: 1.6rem;
    background-color: #DCDCDC;

overflow-x: hidden;
}
`;
export default GlobalStyle;
