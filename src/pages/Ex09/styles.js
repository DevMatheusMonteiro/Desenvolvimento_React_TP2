import styled from "styled-components";

export const Container = styled.main`
  .input-component {
    margin-bottom: 2.4rem;
  }

  .people-container {
    background: ${({ theme }) => theme.colors.surface};
    max-width: 1024px;
    margin: 0 auto;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 0.8rem;
    padding: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;
