import styled from "styled-components";
import { Theme } from "../../../../../theme";

export const WelcomeAdsWrapper = styled.div`
width:90%;
height:100%;
background-color:${({ theme }: { theme: Theme }) => theme.colors("dark")};
&>img{
    width:100%;
}
`;