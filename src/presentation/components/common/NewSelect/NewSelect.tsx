import { useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useSelect } from "downshift";
import { Control, FieldErrors } from "react-hook-form";
import { Input } from "../Input";
import { SelectWrapper, SelectIcon, OptionsList } from "./styles";
import { openVariants } from "./framer";
import { Controller, RegisterOptions } from "react-hook-form";

export interface NewSelectProps<OptionType> {
  name: string;
  defaultValue?: string | number;
  placeholder?: string;
  options: Array<OptionType>;
  labelKey: keyof OptionType;
  control: Control;
  validation?: RegisterOptions;
  errors: FieldErrors;
}

export function NewSelect<OptionType>({
  name,
  placeholder,
  options,
  labelKey,
  control,
  validation,
  errors,
}: NewSelectProps<OptionType>) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setCustomValidity(errors ? errors[name] : "");
    }
  }, [errors, name]);

  const Select = ({ value, onChange }: any) => {
    const { isOpen, getItemProps, getMenuProps, getToggleButtonProps } =
      useSelect({
        items: options,
        onSelectedItemChange: (newItem) => {
          onChange(newItem.selectedItem);
        },
      });

    return (
      <SelectWrapper
        animate={isOpen ? "open" : "close"}
        data-testid="new-select"
      >
        <Input
          {...getToggleButtonProps()}
          placeholder={placeholder}
          name={name}
          value={value ? value[labelKey] : ""}
          readOnly
          invalid={errors[name]}
          data-testid="new-select-input-field"
        />
        <SelectIcon variants={openVariants.icon}>
          <FaAngleDown />
        </SelectIcon>
        <OptionsList
          variants={openVariants.menu}
          {...getMenuProps()}
          initial={false}
          data-testid="new-select-options-list"
        >
          {options.map((option: OptionType, index: number) => (
            <li key={index} {...getItemProps({ item: option, index })}>
              {option[labelKey]}
            </li>
          ))}
        </OptionsList>
      </SelectWrapper>
    );
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={validation}
      render={({ field: { value, onChange } }) => (
        <Select value={value} onChange={onChange} />
      )}
    />
  );
}
