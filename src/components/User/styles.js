import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 200px;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.8rem;
  .iconButton-component {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.tomato};
    svg {
      font-size: 1.6rem;
    }
  }

  .container-info {
    margin-bottom: 2.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .name {
      font-size: 2rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary};
    }
    .age {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  .container-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
