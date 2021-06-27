import styled, { css } from "styled-components";
import { ThemeType } from "../../../../ui/theme";

export const WelcomeAside = styled.aside`
height:100%;
overflow:hidden;
transition: width 100ms;
width:40%;
@media only screen and (max-width:1024px){
    width:100%;
}
`;

export const WelcomeMainSection = styled.div`
height:100%;
overflow:hidden;
transition: width 100ms;
width:60%;
@media only screen and (max-width:1024px){
    width:0px;
}
`;

export const MoveToLogin = styled.button`
font-size:2rem;
position:fixed;
top:calc(50% - 50px);
right:0px;
border:none;
cursor:pointer;
&:hover{
    opacity:1 !important;
}
&:focus{
    outline:none;
}
&>div[role="note"]{
    font-size:1rem;
    padding:0 1rem;
    font-weight:600;
}
@media only screen and (min-width:1024px){
    display:none;
}
${({ theme }: { theme: ThemeType; }) => css`
z-index:${theme.zIndices.tooltip};
color:${theme.colors.light};
background-color:${theme.colors.transparent};
`}
`;

export const WelcomeWrapper = styled.div`
width:100vw;
height:100vh;
& > * {
    display:inline-block;
}
${({ loginOpen }: { loginOpen: boolean; }) => loginOpen && css`
    ${WelcomeAside}{
        @media only screen and (max-width:1024px){
            width:0px;
        }
    }
    ${WelcomeMainSection}{
        @media only screen and (max-width:1024px){
            width:100%;
        }
    }
    ${MoveToLogin}{
        @media only screen and (max-width:1024px){
            display:none;
        }
    }
`}
`;