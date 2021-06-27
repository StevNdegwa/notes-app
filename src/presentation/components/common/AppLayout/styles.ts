import styled from "styled-components";
import { motion } from "framer-motion";
import { ThemeType } from "../../../../ui/theme";

export const AppLayoutWrapper = styled.div`
width:100vw;
height:100vh;
`;

export const AppLayoutHeader = styled.div`
width:100%;
height:60px;
border-bottom:1px inset ${({ theme }: { theme: ThemeType }) => theme.colors.primary[0]};
& button{
    height:100%;
    width:60px;
    font-size:1.7rem;
}
`;

export const AppLayoutMain = styled(motion.main)`
padding:1rem;
height:calc(100% - 120px);
@media only screen and (min-width:1024px){
    padding:3rem 4rem;
}
`;

export const AppLayoutFooter = styled.footer`
width:100%;
height:60px
`;