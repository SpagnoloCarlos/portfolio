import styled, { css } from "styled-components";

export const StyledCardContainer = styled.div(
  ({ theme }) => css`
    background-color: transparent;
    width: 250px;
    height: 300px;
    perspective: 1000px;

    &:hover .flip-card-inner {
      transform: rotateY(-180deg);
    }

    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.8s;
      transform-style: preserve-3d;
    }

    .flip-card-front,
    .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    .flip-card-front {
      background-color: #1b1b1b;
      color: black;
      display: grid;
      place-items: center;
    }

    .flip-card-back {
      background-color: #1b1b1b;
      padding: 2rem 1rem;
      color: #fff;
      transform: rotateY(180deg);
      h1 {
        font-size: 30px;
        margin-bottom: 1rem;
      }
    }
  `
);
