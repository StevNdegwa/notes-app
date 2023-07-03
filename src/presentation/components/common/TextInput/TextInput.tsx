import { ChangeEventHandler, forwardRef, memo, useState } from "react";
import { IntrinsicElementsKeys } from "styled-components";
import { Input, Label, Wrapper } from "./styles";

export interface TextInputProps {
  name: string;
  as: IntrinsicElementsKeys;
  placeholder: string;
  type: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  [key: string]: any;
}

const TI = forwardRef<HTMLInputElement, Partial<TextInputProps>>(
  (
    { as, name, type, label, placeholder, children, onChange, ...props },
    ref
  ) => {
    const [focused, setFocused] = useState<boolean>(false);

    return (
      <Wrapper {...props} as={as} focused={focused}>
        {label && <Label htmlFor={name}>{label}</Label>}
        <Input
          name={name}
          ref={ref}
          type={type || "text"}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          data-testid="text-input"
        />
      </Wrapper>
    );
  }
);

export const TextInput = memo(TI);
