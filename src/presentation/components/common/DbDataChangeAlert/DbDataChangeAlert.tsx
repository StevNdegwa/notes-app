import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { Alert } from "../Alert";
import { FeedbackTypes } from "../../../../shared";
import { showVariants } from "./framer";

export interface DbDataChangeAlertProps {
  status: FeedbackTypes;
  successMessage?: ReactNode;
  errorMessage?: ReactNode;
}

export const DbDataChangeAlert: FC<DbDataChangeAlertProps> = ({
  status,
  successMessage,
  errorMessage,
}) => {
  return (
    <motion.div
      variants={showVariants}
      animate={status === FeedbackTypes.NONE ? "hidden" : "showing"}
      initial={true}
      style={{ display: "none" }}
    >
      <Alert feedback={status}>
        {status === FeedbackTypes.ERROR ? (
          <p>{errorMessage}</p>
        ) : (
          <p>{successMessage}</p>
        )}
      </Alert>
    </motion.div>
  );
};
