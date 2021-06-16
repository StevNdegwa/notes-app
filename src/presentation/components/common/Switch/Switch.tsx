import { memo, useState, FC } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { Wrapper, Icon, Label } from "./styles";

export interface SwitchProps {
  defaultValue?: boolean;
  onChange: (change: boolean) => void;
  label?: string;
}

export const Switch: FC<SwitchProps> = memo(
  ({ defaultValue, onChange, label }) => {
    const [value, setValue] = useState<boolean>(!!defaultValue);

    const handleClick = () => {
      setValue((value: boolean) => !value);
      onChange(value);
    };

    return (
      <Wrapper>
        <Icon onClick={handleClick} icon={value ? FaToggleOn : FaToggleOff} />
        <Label>{label}</Label>
      </Wrapper>
    );
  }
);
