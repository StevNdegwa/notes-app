import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import {
  Workspaces,
  WorkspaceListType,
} from "../../../../../../application/Workspaces";
import { Select, Button } from "../../../../common";

export const WelcomeXForm = () => {
  let [workspaces, setWorkSpaces] = useState<Array<WorkspaceListType>>([]);
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
  }, []);

  return (
    <div className="select-a-workspace">
      {error && <p>{error.message}</p>}
      <Select<WorkspaceListType>
        name="workspace"
        placeholder="Select a workspace"
        options={workspaces}
        labelKey="name"
        valueKey="wsRef"
        ref={register("workspace").ref}
      />
      <Button type="submit" transparent>
        <FaSignInAlt />
      </Button>
    </div>
  );
};
