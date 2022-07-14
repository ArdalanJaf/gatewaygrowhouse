import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.body};
        font-family: sans-serif;
        font-size: 1.15em;
    }
`;
