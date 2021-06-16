import { ChangeEvent, forwardRef, memo, useCallback, useState } from "react";
import { IntrinsicElementsKeys } from "styled-components";
import { Input, Label, Wrapper } from "./styles";

export interface TextInputProps {
  name: string;
  as: IntrinsicElementsKeys;
  placeholder: string;
  type: string;
  label: string;
  onChange: (value: string) => void;
  [key: string]: any;
}

const TI = forwardRef<HTMLInputElement, Partial<TextInputProps>>(
  (
    { as, name, type, label, placeholder, children, onChange, ...props },
    ref
  ) => {
    const [focused, setFocused] = useState<boolean>(false);
    let handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event.target.value);
      },
      [onChange]
    );

    return (
      <Wrapper {...props} as={as} focused={focused}>
        {label && <Label htmlFor={name}>{label}</Label>}
        <Input
          name={name}
          ref={ref}
          type={type || "text"}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={()=>setFocused(true)}
          onBlur={()=>setFocused(false)}
        />
      </Wrapper>
    );
  }
);

export const TextInput = memo(TI);
