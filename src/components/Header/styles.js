import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.6rem 2rem;
  display: flex;
  justify-content: space-between;

  h1 {
    text-align: center;
  }

  .iconButton-component {
    svg {
      font-size: 3.2rem;
    }
  }
`;
