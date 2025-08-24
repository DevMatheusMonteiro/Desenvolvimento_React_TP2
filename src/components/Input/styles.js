import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  label {
    display: inline-block;
    font-weight: bold;
    margin-bottom: 0.4rem;
  }

  &:has(input:focus) label {
    color: ${({ theme }) => theme.colors.secondary};
  }

  .input-container {
    &:has(input:focus) {
      outline: 1px solid ${({ theme }) => theme.colors.secondary};
    }
    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 0.8rem;
    height: 3.2rem;

    input {
      height: 100%;
      padding: 0 0.8rem;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.text};
      width: 100%;
      background: none;
      border: none;
      outline: none;
      -webkit-appearance: none;
      -moz-appearance: textfield;
      appearance: none;

      &::placeholder {
        color: ${({ theme }) => theme.colors.placeholder};
      }
      &[type="number"] {
        -webkit-appearance: none;
        -moz-appearance: textfield;
        appearance: none;
      }

      &[type="number"]::-webkit-outer-spin-button,
      &[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
`;
