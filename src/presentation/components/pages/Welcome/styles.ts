import styled, { css } from "styled-components";

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
height:50px;
font-size:2rem;
position:fixed;
z-index:1000;
top:calc(50% - 50px);
right:0px;
background-color:transparent;
border:none;
cursor:pointer;
&:hover{
    opacity:1 !important;
}
&:focus{
    outline:none;
}
&>div[role="note"]{
    font-size:0.9rem;
    padding:0 1rem;
}
@media only screen and (min-width:1024px){
    display:none;
}
`;

export const WelcomeWrapper = styled.div`
width:100%;
height:100%;
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