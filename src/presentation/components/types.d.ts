declare module 'styled-components';
declare module 'react-filter-search';

export interface DataTableColumn<RowType> {
    title: string;
    accessor: keyof RowType | ((row: RowType) => string | number);
}
  