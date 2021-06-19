import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FeedbackTypes } from "../../FeedbackTypes";
import { Workspaces } from "../../../../application/Workspaces";
import { CWForm } from "./CWForm";
import { CWSStatus } from "./CWStatus";
import { Button, Form } from "../../common";
import {
  CreateWorkspaceWrapper,
  CreateWorkspaceHeader,
  CreateWorkspaceMain,
  CreateWorkspaceFooter,
} from "./styles";

export const CreateWorkspace = () => {
  const [workspace, setWorkspace] = useState<{
    status: FeedbackTypes;
    name?: string;
    error?: Error | null;
  }>({
    status: FeedbackTypes.NONE,
    name: "",
    error: null,
  });

  const handleCreateSpace = useCallback(
    async (data: CreateWorkspaceFormType) => {
      try {
        await Promise.resolve(
          Workspaces.createWorkspace(data.workspaceName)
        ).then((name: string) => {
          setWorkspace({ status: FeedbackTypes.SUCCESS, name, error: null });
        });
      } catch (error) {
        setWorkspace({ status: FeedbackTypes.ERROR, error, name: "" });
      }
    },
    []
  );

  return (
    <CreateWorkspaceWrapper>
      <CreateWorkspaceHeader>
        <Link to="/">
          <Button transparent>
            <FaChevronCircleLeft />
          </Button>
        </Link>
      </CreateWorkspaceHeader>
      <CreateWorkspaceMain
        as={motion.main}
        animate={{ marginTop: ["-20px", "0px"] }}
      >
        <Form<CreateWorkspaceFormType>
          legend="Create a new workspace"
          handler={handleCreateSpace}
        >
          <CWForm />
        </Form>
        <CWSStatus
          status={workspace.status}
          workSpaceName={workspace.name}
          errorMessage={workspace.error?.message}
        />
      </CreateWorkspaceMain>
      <CreateWorkspaceFooter></CreateWorkspaceFooter>
    </CreateWorkspaceWrapper>
  );
};

export type CreateWorkspaceFormType = {
  workspaceName: string;
};
