import { useCallback, useState } from "react";
import { FeedbackTypes } from "../../FeedbackTypes";
import { Workspaces } from "../../../../application/Workspaces";
import { CWForm } from "./CWForm";
import { CWSStatus } from "./CWStatus";
import { Form, AppLayout } from "../../common";

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
    <AppLayout>
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
    </AppLayout>
  );
};

export type CreateWorkspaceFormType = {
  workspaceName: string;
};
