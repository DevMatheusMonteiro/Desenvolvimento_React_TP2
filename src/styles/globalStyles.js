import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.background};
        font-size: 1.6rem;
        font-family: Roboto, sans-serif;
    }

    :-webkit-autofill,
    :-webkit-autofill:hover, 
    :-webkit-autofill:focus {
        border: 0;
        -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
        -webkit-box-shadow: 0 0 0px 1000px transparent inset;
        transition: background-color 5000s ease-in-out 0s;
    }
`;
