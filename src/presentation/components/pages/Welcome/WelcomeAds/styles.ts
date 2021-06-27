import styled from "styled-components";
import { ThemeType } from "../../../../../ui/theme";

export const WelcomeAdsWrapper = styled.div`
width:90%;
height:100%;
background-color:${({ theme }: { theme: ThemeType }) => theme.colors.dark};
&>img{
    width:100%;
}
`;