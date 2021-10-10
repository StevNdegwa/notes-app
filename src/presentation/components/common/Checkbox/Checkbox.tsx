import React, { forwardRef, memo, PropsWithChildren } from "react";
import {
  CheckboxWrapper,
  CheckboxLabel,
  CheckboxInput,
  CheckboxIcon,
} from "./styles";

import { FaCheck } from "react-icons/fa";

export interface CheckboxProps {
  invalid: boolean;
  [prop: string]: unknown;
}

const CheckboxElement = forwardRef<
  HTMLInputElement,
  PropsWithChildren<CheckboxProps>
>(({ label, children, invalid, ...props }, ref) => {
  return (
    <CheckboxWrapper>
      <CheckboxLabel className="label" htmlFor="gender">
        {children}
      </CheckboxLabel>
      <CheckboxInput type="checkbox" {...props} ref={ref} />
      <CheckboxIcon invalid={invalid} className="icon">
        <FaCheck />
      </CheckboxIcon>
    </CheckboxWrapper>
  );
});

export const Checkbox = memo(CheckboxElement);
