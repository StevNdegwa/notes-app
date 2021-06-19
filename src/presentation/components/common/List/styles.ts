import styled, { css } from "styled-components";
import { Theme } from "../../../../theme";

export const ListWrapper = styled.ul`
width:100%;
list-style-type:none;
background-color:white;
${({ theme }: { theme: Theme }) => css`
padding:${theme.space(1)};
&>li{
    text-align:left;
    margin:${theme.space(1)};
    padding:${theme.space(1)};
    border-radius:${theme.borderRadius("sm")};
    color:${theme.colors("primary")};
    &:hover{
        background-color:${theme.colors("grey", 8)};
    }
}
`};
`;