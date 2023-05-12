import styled, { css } from "styled-components";

export const StyledHeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  width: 100%;
  height: 82px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.01),
    rgba(255, 255, 255, 0.01)
  );
  backdrop-filter: blur(5px);
`;

export const StyledHeaderNav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1140px;
  padding: 0 1rem;
  margin: 0 auto;
  ul {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    gap: 2rem;
  }
`;

export const StyleHeaderSection = styled.li(
  ({ theme }) => css`
    font-size: 18px;
    font-weight: 500;
    a {
      display: flex;
      flex-direction: column;
      gap: 5px;
      span {
        align-self: center;
        width: 0%;
        height: 2px;
        background-color: ${theme.colors.secondary};
        transition: all 0.2s ease-out;
      }
    }
    .active {
      span {
        width: 100%;
      }
    }
    &:hover {
      cursor: pointer;
      span {
        width: 100%;
      }
    }
  `
);
