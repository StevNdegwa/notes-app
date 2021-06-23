import { FC, useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FaSignInAlt } from "react-icons/fa";
import { Workspaces, WorkspaceListType } from "../../../../../../application";
import { Select, Button } from "../../../../common";

export interface WelcomeXFormProps {
  workspaces: WorkspaceListType[];
  setWorkSpaces: (list: WorkspaceListType[]) => void;
}

export const WelcomeXForm: FC<WelcomeXFormProps> = ({
  workspaces,
  setWorkSpaces,
}) => {
  let [error, setError] = useState<Error | null>(null);

  const { register } = useFormContext();

  useEffect(() => {
    Workspaces.workSpacesList()
      .then((list: Array<WorkspaceListType>) => {
        setWorkSpaces(list);
      })
      .catch((error: any) => {
        setError(new Error(error.message || "An error occured."));
      });
  }, [setWorkSpaces]);

  let workSpace = useRef(register("workspace", { required: true }));

  return (
    <div className="select-a-workspace">
      {error && <p>{error.message}</p>}
      <Select<WorkspaceListType>
        name="workspace"
        placeholder="Select a workspace"
        options={workspaces}
        labelKey="name"
        valueKey="wsRef"
        ref={workSpace.current.ref}
        onChange={workSpace.current.onChange}
      />
      <Button type="submit" transparent>
        <FaSignInAlt />
      </Button>
    </div>
  );
};
