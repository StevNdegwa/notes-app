import { useCallback, useEffect, useState } from "react";
import {
  Workspaces,
  WorkspacesDataTypes,
  useNotes,
} from "../../../../../application";
import { WorkspaceItem } from "./WorkspaceItem";
import { ManageWorkSpacesWrapper } from "./styles";

export const ManageWorkSpaces = () => {
  const [workspaces, setWorkSpaces] = useState<WorkspacesDataTypes[]>([]);
  const notes = useNotes();

  const handleDeleteWorkSpace = useCallback(
    (workspace: WorkspacesDataTypes) => {
      Workspaces.deleteWorkSpace(workspace).then(() => {
        setWorkSpaces((workspaces) =>
          [...workspaces].filter((ws) => ws.id !== workspace.id)
        );
        notes?.deleteWorkspaceNotes(workspace.wsRef);
      });
    },
    [notes]
  );

  useEffect(() => {
    Workspaces.workSpacesList().then((list) => setWorkSpaces(list));
  }, [setWorkSpaces]);

  return (
    <ManageWorkSpacesWrapper>
      {workspaces.map((workspace) => (
        <WorkspaceItem
          workspace={workspace}
          key={workspace.wsRef}
          deleteWorkSpace={handleDeleteWorkSpace}
        />
      ))}
    </ManageWorkSpacesWrapper>
  );
};
