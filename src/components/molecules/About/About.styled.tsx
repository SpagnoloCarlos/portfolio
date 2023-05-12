import styled, { css } from "styled-components";

export const StyledAboutContainer = styled.section(
  ({ theme }) => css`
    display: flex;
    background-color: #04070d;
    min-height: 100vh;
    padding: 2rem 0;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        h1 {
          font-size: 36px;
          text-align: center;
        }
      }
    }
  `
);

export const StyledAboutContent = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: stretch;
    gap: 1rem;
    & > div {
      flex: 1;
    }
    & > div:first-of-type {
      display: flex;
      align-items: center;
      justify-content: center;
      & > img {
        width: 75%;
      }
    }
    & > div:last-of-type {
      display: flex;
      align-items: center;
      p {
        font-size: 19px;
        line-height: 22px;
        text-align: center;
      }
      span {
        font-size: 36px;
        color: ${theme.colors.secondary};
      }
      span:first-child {
        align-self: flex-start;
        transform: rotate(135deg);
      }
      span:last-child {
        align-self: flex-end;
        transform: rotate(135deg);
      }
      .text {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 1rem 0;
        p {
          text-align: start;
          text-indent: 40px;
        }
      }
    }
  `
);
