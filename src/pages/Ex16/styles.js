import styled from "styled-components";

export const Container = styled.main`
  .input-component {
    margin-bottom: 2.4rem;
  }

  ul {
    list-style: none;
    width: 100%;
    max-width: 300px;
    li {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      background: ${({ theme }) => theme.colors.surface};
      padding: 1rem;
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 0.8rem;

      > div {
        display: flex;
        gap: 1rem;

        span:nth-child(1) {
          color: ${({ theme }) => theme.colors.primary};
          font-weight: bold;
        }
      }
    }

    li + li {
      margin-top: 2.4rem;
    }
  }
`;
