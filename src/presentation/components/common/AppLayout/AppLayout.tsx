import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { Button } from "../../common";
import { loadVariants } from "./framer";
import {
  AppLayoutWrapper,
  AppLayoutHeader,
  AppLayoutMain,
  AppLayoutFooter,
} from "./styles";
import { FC } from "react";

export const AppLayout: FC = ({ children }) => {
  return (
    <AppLayoutWrapper>
      <AppLayoutHeader>
        <Link to="/?login=true" data-testid="to-home-link">
          <Button transparent>
            <FaHome />
          </Button>
        </Link>
      </AppLayoutHeader>
      <AppLayoutMain variants={loadVariants} animate="show">
        {children}
      </AppLayoutMain>
      <AppLayoutFooter></AppLayoutFooter>
    </AppLayoutWrapper>
  );
};
