import styled from "styled-components";

export const Container = styled.aside`
  grid-area: aside;
  padding: 1.6rem 2rem;
  background: ${({ theme }) => theme.colors.surface};
  border-right: 1px solid ${({ theme }) => theme.colors.border};

  nav {
    height: 100%;

    ul {
      height: 100%;
      list-style: none;
      display: flex;
      gap: 2rem;
      justify-content: space-evenly;
      flex-direction: column;

      li {
        border-radius: 0.6rem;
        transition: all 0.3s ease-in-out;

        &:hover a {
          color: ${({ theme }) => theme.colors.secondary};
        }

        &[data-active="true"] a {
          color: ${({ theme }) => theme.colors.primary};
        }
        a {
          font-weight: bold;
          color: ${({ theme }) => theme.colors.text};
          text-decoration: none;
        }
      }
    }
  }
`;
