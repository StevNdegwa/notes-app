import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { Button, TextInput } from "../../../../common";

export const UpdateForm = () => {
  const { register } = useFormContext();
  const userName = useRef(register("name"));

  return (
    <>
      <div>
        <TextInput
          name={userName.current.name}
          onChange={userName.current.onChange}
          ref={userName.current.ref}
          as="p"
          label="User name"
          placeholder="User name"
        />
      </div>
      <div style={{ padding: "1rem", height: "50px" }}>
        <Button primary type="submit">
          Update
        </Button>
      </div>
    </>
  );
};