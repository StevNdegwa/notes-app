import { FC } from "react";
import { FaPowerOff } from "react-icons/fa";
import { Button, Logo } from "../../../common";
import {
  SidebarWrapper,
  SidebarFooter,
  SidbarHeader,
  SidebarMain,
} from "./styles";

export interface SidebarProps {
  openConfirmExitModal: () => void;
}

export const Sidebar: FC<SidebarProps> = ({ openConfirmExitModal }) => {
  return (
    <SidebarWrapper>
      <SidbarHeader>
        <Logo />
      </SidbarHeader>
      <SidebarMain>
      </SidebarMain>
      <SidebarFooter>
        <Button transparent onClick={openConfirmExitModal}>
          <FaPowerOff />
        </Button>
      </SidebarFooter>
    </SidebarWrapper>
  );
};
