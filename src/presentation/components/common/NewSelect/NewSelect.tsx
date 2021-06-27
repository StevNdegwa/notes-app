import { FaAngleDown } from "react-icons/fa";
import { useSelect } from "downshift";
import { Control } from "react-hook-form";
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
}

export function NewSelect<OptionType>({
  name,
  placeholder,
  options,
  labelKey,
  control,
  validation,
}: NewSelectProps<OptionType>) {
  const Select = ({ value, onChange }: any) => {
    const { isOpen, getItemProps, getMenuProps, getToggleButtonProps } =
      useSelect({
        items: options,
        onSelectedItemChange: (newItem) => {
          onChange(newItem.selectedItem);
        },
      });

    return (
      <SelectWrapper animate={isOpen ? "open" : "close"}>
        <Input
          {...getToggleButtonProps()}
          placeholder={placeholder}
          name={name}
          value={value ? value[labelKey] : ""}
          readOnly
        />
        <SelectIcon variants={openVariants.icon}>
          <FaAngleDown />
        </SelectIcon>
        <OptionsList
          variants={openVariants.menu}
          {...getMenuProps()}
          initial={false}
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
