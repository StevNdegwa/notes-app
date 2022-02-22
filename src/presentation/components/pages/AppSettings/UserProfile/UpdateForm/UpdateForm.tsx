import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { FaSave } from "react-icons/fa";
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
          placeholder="User name.. e.g Stephen"
        />
      </div>
      <div style={{ margin: "1rem", height: "50px" }}>
        <Button primary type="submit" leftIcon={FaSave}>
          Update
        </Button>
      </div>
    </>
  );
};
