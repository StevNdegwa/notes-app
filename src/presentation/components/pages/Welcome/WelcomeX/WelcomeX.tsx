import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEllipsisV, FaInfoCircle } from "react-icons/fa";
import { Button, Form } from "../../../common";
import { WelcomeXForm } from "./WelcomeXForm";
import { WelcomeXWrapper, WelcomeXHeader, WelcomeXMain } from "./styles";

export type WelcomeXFormType = {
  workspace: string;
};

export const WelcomeX = () => {
  const handleSubmit = (data: WelcomeXFormType) => {
    console.log(data);
  };

  return (
    <WelcomeXWrapper>
      <WelcomeXHeader>
        <Button transparent>
          <FaEllipsisV />
        </Button>
      </WelcomeXHeader>
      <WelcomeXMain>
        <motion.div animate={{ y: ["-50px", "0px"] }} initial={true}>
          <h3>
            Welcome Stranger{" "}
            <span>
              <FaInfoCircle />
            </span>
          </h3>
          <Form<WelcomeXFormType>
            legend="Select a workspace"
            handler={handleSubmit}
          >
            <WelcomeXForm />
          </Form>
          <Link to="/create-workspace">
            <Button className="create-new-workspace-btn" transparent>
              Create a new workspace
            </Button>
          </Link>
        </motion.div>
      </WelcomeXMain>
      <footer></footer>
    </WelcomeXWrapper>
  );
};
