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
  visible: { display: "block", y:["-5px", "0px"] },
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

  useEffect(() => {
    document.addEventListener("click", handleClickEvt);
    return () => {
      document.removeEventListener("click", handleClickEvt);
    };
  }, [handleClickEvt]);

  return (
    <>
      <Button transparent onClick={() => setOpen((s) => !s)} ref={btnRef}>
        <FaEllipsisV />
      </Button>
      <AppOptionsWrapper
        as={motion.div}
        animate={open ? "visible" : "hidden"}
        variants={variants}
        ref={wrapperRef}
      >
        <List
          items={[<Link to="/application-settings">Application Settings</Link>]}
        />
      </AppOptionsWrapper>
    </>
  );
};