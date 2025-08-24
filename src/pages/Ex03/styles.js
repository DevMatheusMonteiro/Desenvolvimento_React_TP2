import styled from "styled-components";

export const Container = styled.main`
  .content {
    max-width: 1300px;
    margin: 0 auto;

    form {
      max-width: 500px;
      margin: 0 auto;
      margin-bottom: 2.4rem;

      .inputs-container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2.4rem;
        gap: 2.4rem;
      }

      .button-component {
        max-width: 200px;
        margin: 0 auto;
      }
    }

    .users-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      background: ${({ theme }) => theme.colors.surface};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 0.8rem;
      padding: 1.6rem;
    }
  }
`;
