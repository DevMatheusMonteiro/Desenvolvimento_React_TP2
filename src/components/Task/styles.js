import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.8rem;
  padding: 2rem;
  .iconButton-component {
    svg {
      color: ${({ theme }) => theme.colors.tomato};
    }
    margin-bottom: 1.6rem;
  }

  p {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 2.4rem;
    text-decoration: ${({ $completed }) =>
      $completed ? "line-through" : "none"};
  }
`;
