import { SelectWrapper } from "./styles";

export interface SelectProps<OptionType> {
  options: Array<OptionType>;
  valueKey: keyof OptionType;
  labelKey: keyof OptionType;
}

export function Select<OptionType>({
  options,
  valueKey,
  labelKey,
}: SelectProps<OptionType>) {
  return (
    <SelectWrapper>
      {options.map((option: OptionType) => {
        return (
          <option value={String(option[valueKey])} key={String(option[valueKey])}>{option[labelKey]}</option>
        );
      })}
    </SelectWrapper>
  );
}
