import styled from "styled-components";

export const Container = styled.main`
  .input-component {
    max-width: 200px;
    margin-bottom: 2.4rem;
  }

  p {
    span {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: bold;
    }
  }
`;
