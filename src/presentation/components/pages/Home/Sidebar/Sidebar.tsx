import { FC } from "react";
import { FaPowerOff, FaInfo } from "react-icons/fa";
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
        <Button transparent>
          <FaInfo />
        </Button>
      </SidebarMain>
      <SidebarFooter>
        <Button transparent onClick={openConfirmExitModal}>
          <FaPowerOff />
        </Button>
      </SidebarFooter>
    </SidebarWrapper>
  );
};
