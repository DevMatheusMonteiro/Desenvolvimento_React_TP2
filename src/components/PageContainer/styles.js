import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "aside main"
    "footer footer";
  grid-template-rows: max-content 1fr max-content;
  grid-template-columns: max-content 1fr;
  height: 100vh;
  main {
    width: 100%;
    height: 100%;
    grid-area: main;
    padding: 2rem;
    overflow: auto;
  }
`;
