import { FC } from "react";
import RiseLoader from "react-spinners/RiseLoader";
import { PageLayoutWrapper } from "./styles";

export const PageLoader: FC = () => (
  <PageLayoutWrapper>
    <RiseLoader color="hsla(0, 0%, 55%, 1)" />
  </PageLayoutWrapper>
);
