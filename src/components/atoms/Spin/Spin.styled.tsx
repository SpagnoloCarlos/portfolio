import styled, { css } from "styled-components";

export const StyledSpinContainer = styled.div(({ theme }) => {
  return css`
    width: 20px;
    height: 20px;
    display: grid;
    animation: s4 8s infinite;
    &::before,
    &::after {
      content: "";
      grid-area: 1/1;
      border: 4px solid;
      border-radius: 50%;
      border-color: ${theme.colors.black} ${theme.colors.black} #0000 #0000;
      mix-blend-mode: darken;
      animation: s4 2s infinite linear;
    }
    &::after {
      border-color: #0000 #0000 ${theme.colors.white} ${theme.colors.white};
      animation-direction: reverse;
    }

    @keyframes s4 {
      100% {
        transform: rotate(1turn);
      }
    }
  `;
});
