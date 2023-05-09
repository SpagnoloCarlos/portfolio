import styled, { css } from "styled-components";

export const StyledContactContainer = styled.section`
  display: flex;
  background-color: #0a0d13;
  min-height: 100vh;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* gap: 2rem; */
    padding: 2rem 0;
    & > h1 {
      font-size: 36px;
      text-align: center;
    }
  }
`;

export const StyledContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;
  padding: 2rem;
  /* background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1)
  ); */
  /* backdrop-filter: blur(21px); */
  form {
    width: 100%;
    & > div:first-of-type {
      display: flex;
      align-items: center;
      gap: 2rem;
      & > div {
        flex: 1;
      }
    }
  }
`;

export const StyledContactTextArea = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    label {
      color: ${theme.colors.white};
      font-size: 16px;
      /* padding: 2px 5px 8px 5px; */
      margin-left: 1rem;
      background-color: #0a0d13;
      border-radius: 10px;
      width: max-content;
    }
    textArea {
      background-color: transparent;
      border: solid 1px ${theme.colors.white};
      border-radius: 8px;
      color: ${theme.colors.white};
      font-size: 16px;
      font-family: inherit;
      padding: 10px 10px 10px 16px;
      outline: solid 1px transparent;
      transition: all 0.2s ease-out;
      &:focus,
      &:focus-visible {
        outline-color: ${theme.colors.white};
      }
    }
  `
);
