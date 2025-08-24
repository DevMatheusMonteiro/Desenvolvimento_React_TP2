import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.8rem;
  padding: 1.6rem;
  width: 100%;
  height: 180px;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.6rem;
  }

  p {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
