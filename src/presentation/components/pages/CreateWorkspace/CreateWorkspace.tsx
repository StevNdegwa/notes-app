import { TextInput, Button, Form } from "../../common";
import { CreateWorkspaceWrapper, CreateWorkspaceActions } from "./styles";

export const CreateWorkspace = () => {
  return (
    <CreateWorkspaceWrapper>
      <div>
        <Form<{}>
          legend="Create a new workspace"
          handler={(data) => console.log(data)}
        >
          <TextInput />
          <CreateWorkspaceActions><Button type="submit">Create</Button></CreateWorkspaceActions>
        </Form>
      </div>
    </CreateWorkspaceWrapper>
  );
};
