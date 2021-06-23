import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { TextInput, Button } from "../../../common";

export const CWForm = () => {
  const { register } = useFormContext();

  const workspaceName = useRef(register("workspaceName", { required: true }));

  return (
    <>
      <TextInput
        name={workspaceName.current.name}
        ref={workspaceName.current.ref}
        onChange={workspaceName.current.onChange}
        placeholder="Workspace name.. e.g TED Talks"
      />
      <div style={{padding:"1rem"}}>
        <Button type="submit" primary>
          Create
        </Button>
      </div>
    </>
  );
};
