import { FC, MouseEventHandler, ReactNode } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Button } from "../../../../common";
import { MenuItemWrapper } from "./styles";

export interface MenuItemProps {
  onClick: MouseEventHandler;
  label: ReactNode;
}

export const MenuItem: FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <MenuItemWrapper onClick={onClick}>
      <div>{label}</div>
      <Button transparent>
        <FaChevronRight />
      </Button>
    </MenuItemWrapper>
  );
};
