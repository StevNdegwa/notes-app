import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionsLayoutWrapper = styled.div`
width:100%;
height:100%;
`;

export const SectionsLayoutHeader = styled.header`
width:100%;
height:40px;
& *{
    line-height:1;
}
`;

export const SectionsLayoutMain = styled(motion.main)`
width:100%;
height:calc(100% - 40px);
`;