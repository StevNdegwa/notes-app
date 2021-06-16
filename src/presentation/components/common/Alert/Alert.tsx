import { FC, memo } from "react";
import { Wrapper } from "./styles";

export interface AlertProps {
  paint?: string;
}

export const Alert: FC<AlertProps> = memo(({ paint, children }) => (
  <Wrapper paint={paint}>
    <div className="alert-bg" />
    {children}
  </Wrapper>
));
