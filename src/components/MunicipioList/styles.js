import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.8rem;
  padding: 2rem;

  h2 {
    margin-bottom: 2.4rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    overflow: auto;
    max-height: 480px;

    li {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.surface};
      font-weight: bold;
      padding: 1rem;
      border-radius: 1rem;
    }
  }
`;
