import styled, { css } from "styled-components";

export const StyledCompetencesContainer = styled.section`
  display: flex;
  background-color: #070a10;
  min-height: 100vh;
  padding: 2rem 0;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > div > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
    }
    h1 {
      font-size: 36px;
      text-align: center;
    }
  }
`;

export const StyledCompetencesLogos = styled.div`
  .carousel-container {
    padding: 1rem 0;
  }
`;
