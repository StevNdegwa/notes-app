import { motion } from "framer-motion";
import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { List, Button } from "../../../../common";
import { AppOptionsWrapper } from "./styles";
import { useCallback } from "react";
import { useRef } from "react";

const variants = {
  hidden: { display: "none" },
  visible: { display: "block", y: ["-5px", "0px"] },
};

export const AppOptions: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const btnRef = useRef<HTMLButtonElement | null>(null),
    wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleClickEvt = useCallback((evt: any) => {
    if (
      !btnRef.current?.contains(evt.target) &&
      !wrapperRef.current?.contains(evt.target)
    ) {
      setOpen(false);
    }
  }, []);

  const toggleOpen = useCallback(() => setOpen((s) => !s), [setOpen]);

  useEffect(() => {
    document.addEventListener("click", handleClickEvt);
    return () => {
      document.removeEventListener("click", handleClickEvt);
    };
  }, [handleClickEvt]);

  return (
    <>
      <Button
        transparent
        onClick={toggleOpen}
        ref={btnRef}
        data-testid="app-options-control-btn"
      >
        <FaEllipsisV />
      </Button>
      <AppOptionsWrapper
        as={motion.div}
        animate={open ? "visible" : "hidden"}
        variants={variants}
        ref={wrapperRef}
        data-testid="app-options-container"
      >
        <List
          items={[<Link to="/application-settings">Application Settings</Link>]}
        />
      </AppOptionsWrapper>
    </>
  );
};
