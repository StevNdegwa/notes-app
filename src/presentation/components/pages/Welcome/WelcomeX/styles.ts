import styled from "styled-components";
import { Theme } from "../../../../../theme";

export const WelcomeXWrapper = styled.div`
width:100%;
height:100%
`;

export const WelcomeXHeader = styled.header`
text-align:right;
padding:0.2rem;
position:relative;
`;

export const WelcomeXMain = styled.main`
padding:0.2rem;
height:100%;
&>div{
    padding:1rem;
    @media only screen and (min-width:1025px){
        padding:2rem 8rem;
    }
    &>h3{
        font-size:1.3rem;
        line-height:${({ theme }: { theme: Theme }) => theme.lineHeights(3)};
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