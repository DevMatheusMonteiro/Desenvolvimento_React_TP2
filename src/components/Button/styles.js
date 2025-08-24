import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  width: 100%;
  border: none;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  transition: background 0.3s ease-in-out;

  svg {
    font-size: 2rem;
  }

  span {
    font-weight: bold;
    text-align: center;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;
