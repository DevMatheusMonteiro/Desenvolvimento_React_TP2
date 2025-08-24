import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.6rem;
  display: flex;
  justify-content: center;
`;
