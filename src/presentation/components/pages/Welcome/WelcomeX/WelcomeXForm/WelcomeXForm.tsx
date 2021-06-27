import { FC, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FaSignInAlt } from "react-icons/fa";
import { Workspaces, WorkspaceListType } from "../../../../../../application";
import { Button, NewSelect } from "../../../../common";

export interface WelcomeXFormProps {
  workspaces: WorkspaceListType[];
  setWorkSpaces: (list: WorkspaceListType[]) => void;
}

export const WelcomeXForm: FC<WelcomeXFormProps> = ({
  workspaces,
  setWorkSpaces,
}) => {
  let [error, setError] = useState<Error | null>(null);

  const { control } = useFormContext();

  useEffect(() => {
    Workspaces.workSpacesList()
      .then((list: Array<WorkspaceListType>) => {
        setWorkSpaces(list);
      })
      .catch((error: any) => {
        setError(new Error(error.message || "An error occured."));
      });
  }, [setWorkSpaces]);

  return (
    <div className="select-a-workspace">
      {error && <p>{error.message}</p>}
      <NewSelect<WorkspaceListType>
        name="workspace"
        placeholder="Select a workspace"
        options={workspaces}
        labelKey="name"
        control={control}
        validation={{
          required: { value: true, message: "Select a workspace" },
        }}
      />
      <Button type="submit" transparent>
        <FaSignInAlt />
      </Button>
    </div>
  );
};
