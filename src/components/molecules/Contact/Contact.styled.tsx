import styled, { css } from "styled-components";

interface ITextArea {
  invalid: boolean;
}

export const StyledContactContainer = styled.section`
  display: flex;
  background-color: #0a0d13;
  min-height: 100vh;
  padding: 2rem 0;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      & > h1 {
        font-size: 36px;
        text-align: center;
      }
    }
  }
`;

export const StyledContactFormContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 900px;
    padding: 2rem;
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 8px;
      & > div:first-of-type {
        display: flex;
        align-items: center;
        gap: 2rem;
        & > div {
          flex: 1;
        }
      }
    }
    @media (max-width: ${theme.breakpoints.small}) {
      form {
        & > div:first-of-type {
          gap: 1rem;
          flex-direction: column;
          & > div {
            width: 100%;
          }
        }
      }
    }
  `
);

export const StyledContactTextArea = styled.div<ITextArea>(
  ({ theme, invalid }) => css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    label {
      color: ${invalid ? "red" : theme.colors.white};
      font-size: 16px;
      /* padding: 2px 5px 8px 5px; */
      margin-left: 1rem;
      background-color: transparent;
      border-radius: 10px;
      width: max-content;
    }
    textArea {
      background-color: transparent;
      border: solid 1px ${invalid ? "red" : theme.colors.white};
      border-radius: 8px;
      color: ${theme.colors.white};
      font-size: 16px;
      font-family: inherit;
      padding: 10px 10px 10px 16px;
      outline: solid 1px ${invalid ? "red" : "transparent"};
      transition: all 0.2s ease-out;
      &:focus,
      &:focus-visible {
        outline-color: ${invalid ? "red" : theme.colors.white};
      }
    }
    span {
      display: block;
      height: 12px;
      color: red;
      font-size: 12px;
      font-weight: 500;
      margin: 0 0 8px 4px;
    }
  `
);

export const StyledContactButton = styled.button(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    font-size: 16px;
    padding: 8px 16px;
    border: none;
    width: 90px;
    height: 36px;
    transition: all 0.2s ease-out;
    outline: solid 1px transparent;
    border-radius: 8px;
    &:hover {
      cursor: pointer;
      background-color: #7e294b;
    }
    &:focus-visible {
      outline-color: ${theme.colors.white};
    }
  `
);

export const StyledContactMessage = styled.p(
  ({ theme }) => css`
    font-size: 16px;
    font-weight: 500;
    color: ${theme.colors.white};
    @media (max-width: ${theme.breakpoints.small}) {
      text-align: center;
    }
  `
);

export const StyledContactButtonContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    @media (max-width: ${theme.breakpoints.small}) {
      flex-direction: column;
      align-items: center;
    }
  `
);
