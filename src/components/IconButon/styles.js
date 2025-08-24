import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  svg {
    font-size: 2rem;
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    opacity: 0.7;
  }
`;
