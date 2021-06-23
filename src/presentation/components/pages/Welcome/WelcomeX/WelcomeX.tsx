import { FC, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInfoCircle } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import {
  currentWorkSpaceAtom,
  WorkspaceListType,
} from "../../../../../application";
import { Button, Form, Tooltip } from "../../../common";
import { WelcomeXForm } from "./WelcomeXForm";
import { WelcomeXWrapper, WelcomeXHeader, WelcomeXMain } from "./styles";
import { AppOptions } from "./AppOptions";

export type WelcomeXFormType = {
  workspace: string;
};

export interface WelcomeXProps {
  userName: string;
}

export const WelcomeX: FC<WelcomeXProps> = ({ userName }) => {
  let [workspaces, setWorkSpaces] = useState<Array<WorkspaceListType>>([]);
  const [login, setLogin] = useState<boolean>(false);
  const setCurrentWorkSpace = useSetRecoilState(currentWorkSpaceAtom);

  const handleSubmit = (data: WelcomeXFormType) => {
    setCurrentWorkSpace(workspaces.find((w) => w.wsRef === data.workspace)!);
    console.log(data)
    setLogin(true);
  };

  if (login) {
    return <Redirect to="/home" exact />;
  }

  return (
    <WelcomeXWrapper>
      <WelcomeXHeader>
        <AppOptions />
      </WelcomeXHeader>
      <WelcomeXMain>
        <motion.div animate={{ y: ["-50px", "0px"] }} initial={true}>
          <h3>
            Welcome {userName}{" "}
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
            <WelcomeXForm
              workspaces={workspaces}
              setWorkSpaces={setWorkSpaces}
            />
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
