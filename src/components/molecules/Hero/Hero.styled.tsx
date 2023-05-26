import styled, { css } from "styled-components";

export const StyledHeroContainer = styled.section(
  ({ theme }) => css`
    display: flex;
    min-height: 100vh;
    overflow: hidden;
    & > div {
      display: flex;
      align-items: center;
      width: 100%;
      overflow-x: hidden;
    }
    @media (max-width: ${theme.breakpoints.medium}) {
      & > div {
        flex-direction: column;
        justify-content: center;
      }
    }
    @media (max-width: ${theme.breakpoints.small}) {
      min-height: calc(100vh - 82px);
    }
  `
);

export const StyledHeroDescription = styled.div(
  ({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
    h1 {
      font-size: 36px;
    }
    p {
      font-size: 20px;
    }
    @media (max-width: ${theme.breakpoints.medium}) {
      justify-content: center;
      flex: 0;
    }
  `
);

export const StyledHeroImage = styled.div(
  ({ theme }) => css`
    flex: 0.6;
    img {
      width: 100%;
      height: auto;
      aspect-ratio: 1;
    }
    @media (max-width: ${theme.breakpoints.medium}) {
      justify-content: center;
      flex: 0;
    }
  `
);
