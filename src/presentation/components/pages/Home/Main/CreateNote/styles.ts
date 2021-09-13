import styled from "styled-components";
import { motion } from "framer-motion";

export const CreateNoteWrapper = styled(motion.div)`
height:100%;
display:inline-block;
`;

export const CreateNoteEditor = styled.div`
width:100%;
height:calc(100% - 4rem);
overflow:auto;
`;

export const CreateNoteActions = styled.div`
width:100%;
height:4rem;
display:flex;
justify-content:space-between;
padding:0.5rem 2rem;
`;
