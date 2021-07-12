import { motion } from "framer-motion";
import { FC, ReactNode, useState } from "react";
import { TooltipWrapper, TooltipContent } from "./styles";
import { TooltipPosition } from "./TooltipPosition";
const tip = {
  visible: { display: "block", y: ["-2px", "0px"] },
  hidden: { display: "none" },
};

export interface TooltipProps {
  position?: TooltipPosition;
  content?: ReactNode;
}

export const Tooltip: FC<TooltipProps> = ({
  position = TooltipPosition.RIGHT,
  content = "",
  children,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <TooltipWrapper
      as={motion.div}
      animate={open ? "visible" : "hidden"}
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
    >
      {children}
      <TooltipContent
        as={motion.div}
        variants={tip}
        initial={false}
        position={position}
      >
        {content}
      </TooltipContent>
    </TooltipWrapper>
  );
};
