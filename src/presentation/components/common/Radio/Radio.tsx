import { forwardRef, memo, PropsWithChildren } from "react";
import {
  RadioWrapper,
  RadioLabel,
  RadioInput,
  RadioIcon,
} from "./styles";

import { FaCircle } from "react-icons/fa";

export interface RadioProps {
  invalid: boolean;
  [prop: string]: unknown;
}

const RadioElement = forwardRef<
  HTMLInputElement,
  PropsWithChildren<RadioProps>
>(({ label, children, invalid, ...props }, ref) => {
  return (
    <RadioWrapper>
      <RadioLabel className="label" htmlFor="gender">
        {children}
      </RadioLabel>
      <RadioInput type="radio" {...props} ref={ref} />
      <RadioIcon invalid={invalid} className="icon">
        <FaCircle />
      </RadioIcon>
    </RadioWrapper>
  );
});

export const Radio = memo(RadioElement);
