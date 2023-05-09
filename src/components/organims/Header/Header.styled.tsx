import styled from "styled-components";

export const StyledHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1140px;
  padding: 0 1rem;
  margin: 0 auto;
  height: 82px;
`;

export const StyledHeaderNav = styled.nav`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    gap: 2rem;
    li {
      font-size: 18px;
      font-weight: 500;
    }
  }
`;
