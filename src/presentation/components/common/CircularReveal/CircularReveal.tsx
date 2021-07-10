import { FC, useState, useEffect, useMemo } from "react";
import { hsla } from "polished";
import { CircularRevealWrapper, Circle } from "./styles";
import { getHsla } from "../../../../utils/getHsla";
import { useAnimation } from "framer-motion";

const variants = {
  wrapper: {
    reset: () => ({
      display: "block",
      transition: {
        when: "afterChildren",
      },
    }),
    reveal: {
      display: "none",
      transition: {
        when: "afterChildren",
      },
    },
  },
  circle: {
    reveal: () => ({
      transform: ["scale(500)", "scale(1)"],
    }),
  },
};

export interface CircularRevealProps {
  bg: string;
}

export const CircularReveal: FC<CircularRevealProps> = ({ bg }) => {
  const controls = useAnimation();

  const [backgroundColor, setCurrentBg] = useState<string>(() =>
    hsla(getHsla(bg))
  );

  const newBackgroundColor = useMemo(()=>hsla(getHsla(bg)), [bg]);

  useEffect(() => {
    controls
      .start("reset")
      .then(() => controls.start("reveal"))
      .then(() => setCurrentBg(newBackgroundColor));
  }, [bg, controls, newBackgroundColor]);

  return (
    <CircularRevealWrapper
      variants={variants.wrapper}
      animate={controls}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ backgroundColor: "transparent" }}
    >
      <Circle
        custom={backgroundColor}
        variants={variants.circle}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{ backgroundColor }}
      ></Circle>
    </CircularRevealWrapper>
  );
};
