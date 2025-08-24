import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  > .select {
    width: 100%;
    position: relative;
    color: ${({ theme }) => theme.colors.text};

    label {
      &[data-sronly="true"] {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
        margin: 0;
      }

      color: ${({ theme }) => theme.colors.text};
      display: inline-block;
      margin-bottom: 0.4rem;
    }

    .select-button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.8rem;
      height: 3.2rem;
      border-radius: 0.8rem;
      border: 1px solid ${({ theme }) => theme.colors.border};
      background-color: ${({ theme }) => theme.colors.surface};

      > .logo-value {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        column-gap: 0.8rem;

        > svg {
          color: ${({ theme }) => theme.colors.placeholder};
        }

        > .selected-value {
          font-size: 1.6rem;
          color: ${({ theme }) => theme.colors.text};

          @media (min-width: 1000px) {
            font-size: 1.6rem;
          }
        }

        > .default-value {
          font-size: 1.6rem;

          color: ${({ theme }) => theme.colors.placeholder};

          @media (min-width: 1000px) {
            font-size: 1.6rem;
          }
        }
      }

      .chevrons {
        svg {
          font-size: 1.6rem;
        }

        [data-chevron="chevronUp"] {
          display: none;
        }
      }
    }

    .options-view-button {
      all: unset;
      position: absolute;
      inset: 0;
      cursor: pointer;
      z-index: 2;
    }

    .options-view-button:focus + .select-button,
    .options-view-button:checked + .select-button {
      outline: 1px solid ${({ theme }) => theme.colors.primary};
    }

    &:has(.options-view-button:focus) label {
      color: ${({ theme }) => theme.colors.primary};
    }

    &:has(.options-view-button:checked) label,
    .options-view-button:checked + .select-button .chevrons {
      color: ${({ theme }) => theme.colors.primary};
    }

    .options-view-button:checked + .select-button .chevrons {
      [data-chevron="chevronDown"] {
        display: none;
      }

      [data-chevron="chevronUp"] {
        display: block;
      }
    }
  }
  .options-list {
    z-index: 3;
    display: none;
    position: absolute;
    width: 100%;
    list-style: none;
    margin-top: 0.4rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.colors.surface};
    overflow: hidden;

    .option-value {
      cursor: pointer;
      display: flex;
      align-items: center;
      height: 4rem;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
      position: relative;

      &:last-of-type {
        border: 0;
      }

      &:has(input:checked),
      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
      }

      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1.2rem;
        margin: 0 1px;
        width: 100%;
        height: 90%;
        border-radius: 0.8rem;

        > svg {
          color: ${({ theme }) => theme.colors.primary};
          display: none;
        }
      }

      &:has(input:focus) > div {
        outline: 1px solid ${({ theme }) => theme.colors.primary};
        &:not(.default-option) > label {
          color: ${({ theme }) => theme.colors.text};
        }

        > svg {
          display: block;
        }
      }

      &:has(input:checked) > div {
        &:not(.default-option) > label {
          color: ${({ theme }) => theme.colors.text};
        }

        > svg {
          display: block;
        }
      }

      & > .default-option {
        color: ${({ theme }) => theme.colors.text};
      }

      > input {
        all: unset;
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }

    .default-option > div {
      > label {
        color: ${({ theme }) => theme.colors.text};
      }
    }
  }
  &:has(.options-view-button:checked) {
    .options-list {
      display: block;
      max-height: 300px;
      overflow: auto;
    }
  }
`;
