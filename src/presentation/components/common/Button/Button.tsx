import { forwardRef, memo } from "react";
import { Wrapper } from "./styles";
import { IconType } from "react-icons";

export interface ButtonProps {
  icon?: IconType;
  transparent?: boolean;
  [props: string]: any;
}

const Btn = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ icon: Icon, children, transparent, ...props }, ref) => (
    <Wrapper ref={ref} {...props} transparent={!!transparent}>
      <div className="label">{children}</div>
      {Icon && (
        <div className="icon">
          <Icon />
        </div>
      )}
    </Wrapper>
  )
);

export const Button = memo(Btn);
