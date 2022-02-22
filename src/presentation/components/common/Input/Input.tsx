import { ChangeEventHandler, FC, forwardRef } from "react";
import { InputWrapper } from "./styles";

export interface InputProps {
  name?: string;
  onChange?: ChangeEventHandler;
  invalid?: boolean;
  [key: string]: unknown;
}

export const Input: FC<Partial<InputProps>> = forwardRef<
  HTMLInputElement,
  Partial<InputProps>
>(({ name, onChange, invalid, ...props }, ref) => {
  return (
    <InputWrapper
      name={name}
      onChange={onChange}
      {...props}
      ref={ref}
      readOnly={props.readOnly as boolean}
      invalid={invalid as boolean}
    />
  );
});
