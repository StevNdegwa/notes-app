import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { FaSave } from "react-icons/fa";
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
        data-testid="create-ws-name-input"
      />
      <div style={{ padding: "1rem" }}>
        <Button type="submit" primary leftIcon={FaSave} data-testid="create-ws-submit-btn">
          Create
        </Button>
      </div>
    </>
  );
};
