import { forwardRef, memo } from "react";
import { TextInput } from "../TextInput";
import { Wrapper } from "./styles";

export interface FilterBarProps {
  placeholder?: string;
  onFilter: (search: string) => void;
  label?: string;
}

const FB = forwardRef<HTMLInputElement, FilterBarProps>(
  ({ onFilter, label, placeholder }, ref) => {
    const handleFilter = (search: string) => {
      onFilter(search);
    };

    return (
      <Wrapper>
        <TextInput
          className="filter-bar"
          type="search"
          placeholder={placeholder || "Search..."}
          onChange={handleFilter}
          ref={ref}
          label={label}
        />
      </Wrapper>
    );
  }
);

export const FilterBar = memo(FB);
