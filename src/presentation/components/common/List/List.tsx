import { ReactNode, FC } from "react";
import { ListWrapper } from "./styles";

export interface ListProps {
  items: Array<ReactNode>;
}

export const List: FC<ListProps> = ({ items }) => {
  return (
    <ListWrapper>
      {items.map((item: ReactNode, index: number) => {
        return <li key={index}>{item}</li>;
      })}
    </ListWrapper>
  );
};
