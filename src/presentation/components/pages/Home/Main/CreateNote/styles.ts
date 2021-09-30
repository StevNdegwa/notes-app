import styled from "styled-components";
import { motion } from "framer-motion";

export const CreateNoteWrapper = styled(motion.div)`
height:100%;
display:inline-block;
position:relative;
`;

export const ContinueNew = styled.div`
width: 250px;
padding: 1rem 0;
text-align: center;
& button{
  width: 200px;
  margin: 0.5rem 0;
}
`;