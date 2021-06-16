import { FC, memo } from "react";
import { IntrinsicElementsKeys } from "styled-components";
import { Wrapper } from "./styles";

export interface ContainerProps {
  as: IntrinsicElementsKeys;
}

export const Container: FC<Partial<ContainerProps>> = memo(
  ({ as, children, ...props }) => (
    <Wrapper as={as} {...props}>
      {children}
    </Wrapper>
  )
);
