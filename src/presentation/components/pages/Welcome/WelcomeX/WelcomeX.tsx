import { FaEllipsisV, FaSignInAlt, FaInfoCircle } from "react-icons/fa";
import { Button, Select, Form } from "../../../common";
import { WelcomeXWrapper, WelcomeXHeader, WelcomeXMain } from "./styles";

export const WelcomeX = () => {
  return (
    <WelcomeXWrapper>
      <WelcomeXHeader>
        <Button transparent>
          <FaEllipsisV />
        </Button>
      </WelcomeXHeader>
      <WelcomeXMain>
        <div>
          <h3>
            Welcome Stranger{" "}
            <span>
              <FaInfoCircle />
            </span>
          </h3>
          <Form<{}>
            legend="Select a workspace"
            handler={(data) => console.log(data)}
          >
            <div className="select-a-workspace">
              <Select
                options={[{ label: "Demo", value: "demo" }]}
                labelKey="label"
                valueKey="value"
              />
              <Button type="submit" transparent>
                <FaSignInAlt />
              </Button>
            </div>
          </Form>
          <Button className="create-new-workspace-btn" transparent>
            Create a new workspace
          </Button>
        </div>
      </WelcomeXMain>
      <footer></footer>
    </WelcomeXWrapper>
  );
};
