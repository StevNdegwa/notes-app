import { useState } from "react";
import { Redirect } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import { Button } from "../../../common";
import {
  SidebarWrapper,
  SidebarFooter,
  SidbarHeader,
  SidebarMain,
} from "./styles";

export const Sidebar = () => {
  const [logOut, setLogout] = useState<boolean>(false);

  if (logOut) {
    return <Redirect to="/" />;
  }

  return (
    <SidebarWrapper>
      <SidbarHeader></SidbarHeader>
      <SidebarMain></SidebarMain>
      <SidebarFooter>
        <Button transparent onClick={() => setLogout(true)}>
          <FaPowerOff />
        </Button>
      </SidebarFooter>
    </SidebarWrapper>
  );
};
