import { FC } from "react";
import { motion } from "framer-motion";
import { Alert } from "../../../common";
import { FeedbackTypes } from "../../../FeedbackTypes";

export interface CWSStatusProps {
  status: FeedbackTypes;
  workSpaceName?: string;
  errorMessage?: string;
}

const variants = {
  showing: {
    display: "block",
    y: ["-20px", "0px"],
  },
  hidden: {
    display: "none",
  },
};

export const CWSStatus: FC<CWSStatusProps> = ({
  status,
  workSpaceName,
  errorMessage,
}) => {
  return (
    <motion.div
      variants={variants}
      animate={status === FeedbackTypes.NONE ? "hidden" : "showing"}
    >
      <Alert feedback={status}>
        {status === FeedbackTypes.ERROR ? (
          <p>{errorMessage}</p>
        ) : (
          <p>
            Created <span style={{ fontWeight: "bold" }}>{workSpaceName}</span>{" "}
            successfully
          </p>
        )}
      </Alert>
    </motion.div>
  );
};
