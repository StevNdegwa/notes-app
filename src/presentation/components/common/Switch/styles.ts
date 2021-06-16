import styled from "styled-components";
import { Button } from "../Button";

export const Wrapper = styled.div`
display:flex;
`;

export const Icon = styled(Button)`
height:40px;
width:40px;
background-color:transparent;
`;

export const Label = styled.div`
line-height:40px;
width:100%;
font-weight:500;
`;