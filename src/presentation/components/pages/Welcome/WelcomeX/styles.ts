import styled from "styled-components";

export const WelcomeXWrapper = styled.div`
width:100%;
height:100%
`;

export const WelcomeXHeader = styled.header`
text-align:right;
padding:0.2rem;
position:relative;
height:3rem;
`;

export const WelcomeXMain = styled.main`
padding:0.2rem;
height:50%;
&>div{
    padding:1rem;
    @media only screen and (min-width:1025px){
        padding:2rem 8rem;
    }
    &>h3{
        font-size:1.3rem;
        line-height:1;
    }
    &>form{
        & div.select-a-workspace{
            display:flex;
            margin:10px 0;
            &>button[type="submit"]{
                width:50px;
            }
        }
    }
}
`;

export const SocialMediaIcon = styled.a`
width:3rem;
height:3rem;
background-color:hsla(210, 88%, 87%, 1);
display:inline-block;
font-size:2rem;
border-radius:50%;
margin:0.5rem;
&>svg{
    vertical-align:middle;
}
`;

export const WelcomeXFooter = styled.footer`
height:calc(50% - 3rem);
width:100%;
text-align:center;
`;