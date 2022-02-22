import { FC, useCallback } from "react";
import { FaTrash } from "react-icons/fa";
import { WorkspacesDataTypes } from "../../../../../../application";
import { Button } from "../../../../common";
import { WorkspaceItemWrapper } from "./styles";

export interface WorkspaceItemProps {
  workspace: WorkspacesDataTypes;
  deleteWorkSpace: (ws: WorkspacesDataTypes) => void;
}

export const WorkspaceItem: FC<WorkspaceItemProps> = ({
  workspace,
  deleteWorkSpace,
}) => {
  const handleDelete = useCallback(() => {
    deleteWorkSpace(workspace);
  }, [deleteWorkSpace, workspace]);

  return (
    <WorkspaceItemWrapper>
      <div>{workspace.name}</div>
      <div>
        {/* <Button transparent>
          <FaEdit />
        </Button> */}
        <Button transparent onClick={handleDelete}>
          <FaTrash />
        </Button>
      </div>
    </WorkspaceItemWrapper>
  );
};
