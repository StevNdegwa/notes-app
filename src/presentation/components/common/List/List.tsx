import { forwardRef } from "react";
import { ReactNode, FC } from "react";
import { ListWrapper } from "./styles";

export interface ListProps {
  items: Array<ReactNode>;
  className?: string;
}

export const List: FC<ListProps> = forwardRef<HTMLUListElement, ListProps>(
  ({ items, className }, ref) => {
    return (
      <ListWrapper ref={ref} className={className}>
        {items.map((item: ReactNode, index: number) => {
          return <li key={index}>{item}</li>;
        })}
      </ListWrapper>
    );
  }
);
