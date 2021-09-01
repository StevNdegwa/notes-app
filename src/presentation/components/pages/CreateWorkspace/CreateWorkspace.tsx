import { useCallback, useState } from "react";
import { FeedbackTypes } from "../../FeedbackTypes";
import { Workspaces } from "../../../../application/Workspaces";
import { CWForm } from "./CWForm";
import { Form, AppLayout, DbDataChangeAlert } from "../../common";

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
      } catch (error: any) {
        setWorkspace({ status: FeedbackTypes.ERROR, error, name: "" });
      }
    },
    [setWorkspace]
  );

  return (
    <AppLayout>
      <Form<CreateWorkspaceFormType>
        legend="Create a new workspace"
        handler={handleCreateSpace}
      >
        <CWForm />
      </Form>
      <DbDataChangeAlert
        status={workspace.status}
        successMessage={
          <>
            Created <span style={{ fontWeight: "bold" }}>{workspace.name}</span>
            successfully
          </>
        }
        errorMessage={workspace.error?.message}
      />
    </AppLayout>
  );
};

export type CreateWorkspaceFormType = {
  workspaceName: string;
};
