declare module 'styled-components';
declare module 'react-filter-search';
declare module '@editorjs/list';

export interface DataTableColumn<RowType> {
    title: string;
    accessor: keyof RowType | ((row: RowType) => string | number);
}
