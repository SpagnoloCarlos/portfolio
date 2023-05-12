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
      @media (max-width: ${theme.breakpoints.small}) {
        flex-direction: column;
      }
    }
    canvas {
      position: absolute;
      width: 100% !important;
      height: calc(100vh - 81px) !important;
    }
  `
);

export const StyledHeroDescription = styled.div`
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
`;

export const StyledHeroImage = styled.div`
  flex: 0.6;
  img {
    width: 100%;
  }
`;
