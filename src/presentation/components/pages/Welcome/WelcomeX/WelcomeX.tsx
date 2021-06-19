import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInfoCircle } from "react-icons/fa";
import { Button, Form, Tooltip } from "../../../common";
import { WelcomeXForm } from "./WelcomeXForm";
import { WelcomeXWrapper, WelcomeXHeader, WelcomeXMain } from "./styles";
import { AppOptions } from "./AppOptions";

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
        <AppOptions/>
      </WelcomeXHeader>
      <WelcomeXMain>
        <motion.div animate={{ y: ["-50px", "0px"] }} initial={true}>
          <h3>
            Welcome Stranger{" "}
            <Tooltip
              content={
                <div style={{ width: "100px", textAlign: "center" }}>
                  Replace this name with a prefered name by clicking options on
                  the top right of this page
                </div>
              }
            >
              <FaInfoCircle />
            </Tooltip>
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
