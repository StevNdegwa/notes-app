import styled from "styled-components";

export const FormWrapper = styled.form`
  width: 100%;
  margin: 20px 0;
  & > fieldset {
    border: none;
    &>legend{
      font-weight:400;
      margin-bottom:1.5rem;
    }
  }
`;
