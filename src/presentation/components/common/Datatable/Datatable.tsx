import { useState, useEffect } from "react";
import { DataTableColumn } from "../../types";
import { Wrapper, Table, Tablehead } from "./styles";
import { DatatableStatus } from "./DatatableStatus";
import { DatatableRows } from "./DatatableRows";

export interface DatatableProps<RowsType> {
  columns: Array<DataTableColumn<RowsType>>;
  rows: Array<Array<JSX.Element>>;
  loading?: boolean;
  error: Error | null;
}

export enum DatatableStatuses {
  LOADING = "LOADING",
  ERROR = "ERROR",
  NORMAL = "NORMAL",
}

export function Datatable<RowsType>({
  columns,
  rows,
  loading,
  error,
}: DatatableProps<RowsType>) {
  const [status, setStatus] = useState<DatatableStatuses>(
    error
      ? DatatableStatuses.ERROR
      : loading
      ? DatatableStatuses.LOADING
      : DatatableStatuses.NORMAL
  );

  useEffect(() => {
    setStatus(
      error
        ? DatatableStatuses.ERROR
        : loading
        ? DatatableStatuses.LOADING
        : DatatableStatuses.NORMAL
    );
  }, [loading, error]);

  return (
    <Wrapper>
      <Table>
        <Tablehead>
          <tr>
            {columns.map((column: DataTableColumn<RowsType>) => {
              return <th key={column.title}>{column.title}</th>;
            })}
          </tr>
        </Tablehead>
        <tbody>
          {status !== DatatableStatuses.NORMAL ? (
            <DatatableStatus
              status={status}
              noOfColumns={columns.length}
              error={error}
            />
          ) : (
            <DatatableRows rows={rows} columns={columns} />
          )}
        </tbody>
      </Table>
    </Wrapper>
  );
}
