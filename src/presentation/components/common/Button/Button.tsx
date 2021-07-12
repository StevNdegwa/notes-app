import { forwardRef, memo } from "react";
import { Wrapper } from "./styles";
import { IconType } from "react-icons";

export interface ButtonProps {
  leftIcon?: IconType;
  rightIcon?: IconType;
  transparent?: boolean;
  primary?: boolean;
  secondary?: boolean;
  [props: string]: any;
}

const Btn = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      children,
      transparent,
      primary,
      secondary,
      ...props
    },
    ref
  ) => (
    <Wrapper
      ref={ref}
      transparent={!!transparent}
      primary={!!primary}
      secondary={!!secondary}
      {...props}
    >
      {LeftIcon && (
        <div className="icon">
          <LeftIcon />
        </div>
      )}
      <div className="label">{children}</div>
      {RightIcon && (
        <div className="icon">
          <RightIcon />
        </div>
      )}
    </Wrapper>
  )
);

export const Button = memo(Btn);
