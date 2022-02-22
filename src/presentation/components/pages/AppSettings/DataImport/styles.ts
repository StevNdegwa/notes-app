import styled from "styled-components";

export const DataImportWrapper = styled.div`
width: 100%;
display: flex;
grid-gap: 20px;
`;

export const LocalDataImport = styled.div`
width:fit-content;
position:relative;
& > input{
  position:absolute;
  opacity:0;
  cursor:pointer;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:10;
  border:1px solid red;
}
& > button{
  left:0;
  top:0;
  z-index:1;
}
`;

export const ProceedDataImport = styled.div`
width:100%;
height: 3.5rem;
margin-top: 3rem;
display:flex;
justify-content:space-between;
align-items:center;
& > p{
  margin-right: 1rem;
}
`;