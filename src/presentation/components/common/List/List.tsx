import { forwardRef } from "react";
import { ReactNode, FC } from "react";
import { ListWrapper } from "./styles";

export interface ListProps {
  items: Array<unknown>;
  label?: string;
  className?: string;
}

export const List: FC<ListProps> = forwardRef<HTMLUListElement, ListProps>(
  ({ items, className, label }, ref) => {
    return (
      <ListWrapper ref={ref} className={className}>
        {items.map((item: unknown, index: number) => {
          return (
            <li key={index}>
              {!!label
                ? (item as { [key: string]: string })[label]
                : (item as ReactNode)}
            </li>
          );
        })}
      </ListWrapper>
    );
  }
);
