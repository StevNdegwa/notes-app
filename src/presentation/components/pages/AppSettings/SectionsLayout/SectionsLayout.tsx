import { FC } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Button } from "../../../common";
import {
  SectionsLayoutWrapper,
  SectionsLayoutHeader,
  SectionsLayoutMain,
} from "./styles";

export interface SectionsLayoutProps {
  backToMenu: Function;
}

export const SectionsLayout: FC<SectionsLayoutProps> = ({
  backToMenu,
  children,
}) => {
  return (
    <SectionsLayoutWrapper>
      <SectionsLayoutHeader>
        <Button onClick={backToMenu} transparent leftIcon={FaChevronLeft}>
          Back to menu
        </Button>
      </SectionsLayoutHeader>
      <SectionsLayoutMain>{children}</SectionsLayoutMain>
    </SectionsLayoutWrapper>
  );
};
