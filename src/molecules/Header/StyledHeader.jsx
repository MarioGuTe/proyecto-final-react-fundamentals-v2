import styled from "styled-components";

export const HeaderSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.4rem 1rem 0.3rem 1rem;

  @media (min-width: 1024px) {
    padding: 1.4rem 5.8em 0.3rem 5.8em;
  }
`;

export const HeaderContainer = styled.div`
  background: var(--primary-color);
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    width: 50px;
    height: 50px;
  }
`;

export const HeaderTitle = styled.p`
  color: var(--secondary-color);
  font-size: 1.2rem;
  font-weight: 600;

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;
