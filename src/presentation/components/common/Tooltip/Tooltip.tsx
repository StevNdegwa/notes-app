import { motion } from "framer-motion";
import { FC, ReactNode, useState } from "react";
import { TooltipWrapper, TooltipContent } from "./styles";

const tip = {
  visible: { display: "block", y: ["-2px", "0px"] },
  hidden: { display: "none" },
};

export const Tooltip: FC<TooltipProps> = ({ position, children, content }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <TooltipWrapper
      as={motion.div}
      animate={open ? "visible" : "hidden"}
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
    >
      {children}
      <TooltipContent as={motion.div} variants={tip} initial={false}>
        {content}
      </TooltipContent>
    </TooltipWrapper>
  );
};

export enum TooltipPosition {
  TOP = "TOP",
  RIGHT = "RIGHT",
  BOTTOM = "BOTTOM",
  LEFT = "LEFT",
}

export interface TooltipProps {
  position?: TooltipPosition;
  content?: ReactNode;
}
