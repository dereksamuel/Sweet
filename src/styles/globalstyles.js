import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
  }

  body {
    overscroll-behavior: none;
    width: 100%;
    height: 100vh;
    background: #272525;
  }
  
  #app {
    padding-bottom: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
    max-width: 500px;
    margin: auto;
    height: 100%;
    overflow: auto;
    background: #EFDEDE;
    padding-bottom: 13rem;
  }

  html {
    font-size: 62.5%;
  }

  ::-webkit-scrollbar {
    width: 8px;     /* Tamaño del scroll en vertical */
    height: 8px;    /* Tamaño del scroll en horizontal */
  }

  ::-webkit-scrollbar-thumb {
    background: #aba0a0;
    border-radius: 4px;
  }

  /* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #aba0a0;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }

  /* Cambiamos el fondo cuando esté en active */
  ::-webkit-scrollbar-thumb:active {
    background-color: #aba0a0;
  }

  ::-webkit-scrollbar-track {
    background: #ecbcbcb8;
    border-radius: 4px;
  }

  /* Cambiamos el fondo cuando esté en active o hover */
  ::-webkit-scrollbar-track:hover,
  ::-webkit-scrollbar-track:active {
    background: #ecbcbcb8;
  }
`;