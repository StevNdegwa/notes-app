import styled from "styled-components";

export const TableRow = styled.tr`
  width: 100%;
  line-height: 40px;
  padding: 0 0.3rem;
  &:nth-child(even) {
    background-color: hsla(0, 0%, 96%, 1);
  }
  &:hover {
    background-color: hsla(0, 0%, 93%, 1);
  }
  & > td > div {
    display: flex;
    justify-content: space-between;
    & > div {
      width: 100%;
      padding-left: 1rem;
      &[role="columnheader"] {
        font-weight: 600;
        min-width: 120px;
        display: none;
        max-width: 20%;
      }
    }
  }

  @media only screen and (max-width: 730px) {
    & > td {
      width: 100%;
      display: flex;
      & > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        & > div {
          &[role="columnheader"] {
            display: block;
          }
        }
      }
    }
  }
`;