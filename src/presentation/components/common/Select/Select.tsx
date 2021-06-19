import { ChangeEventHandler, ForwardedRef, forwardRef } from "react";
import { SelectWrapper } from "./styles";

export interface SelectProps<OptionType> {
  name: string;
  defaultValue?: string | number;
  placeholder?: string;
  options: Array<OptionType>;
  valueKey: keyof OptionType;
  labelKey: keyof OptionType;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

function S<OptionType>(
  {
    name,
    defaultValue,
    options,
    valueKey,
    labelKey,
    placeholder,
    onChange,
  }: SelectProps<OptionType>,
  ref?: ForwardedRef<HTMLSelectElement>
) {
  return (
    <SelectWrapper
      name={name}
      defaultValue={defaultValue}
      ref={ref}
      onChange={onChange}
    >
      <option value="" style={{ color: "gray" }}>
        {placeholder || "Select an option"}
      </option>
      {options.map((option: OptionType) => {
        return (
          <option
            value={String(option[valueKey])}
            key={String(option[valueKey])}
          >
            {option[labelKey]}
          </option>
        );
      })}
    </SelectWrapper>
  );
}

export const Select = forwardRef<HTMLSelectElement, SelectProps<any>>(S) as <
  OptionType
>(
  props: SelectProps<OptionType> & { ref?: ForwardedRef<HTMLSelectElement> }
) => any;
