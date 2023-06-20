import { DataGrid, GridColDef, ptBR } from "@mui/x-data-grid";
import { MouseEvent, ReactNode } from "react";

import { DataGridContent } from "./styles";

export interface TableColumnValue {
  label: string;
}

type TableColumns<T> = {
  field: string;
  name: string;
  flex?: number;
  value: (row: T) => string | number | ReactNode;
  type?:
    | "string"
    | "number"
    | "date"
    | "dateTime"
    | "boolean"
    | "singleSelect"
    | "actions";
};

interface IProps {
  data: any[] | any;
  columns: TableColumns<any>[];
  rowId: (row: any | string) => string | number;
  onRowClick?: (
    row: any,
    event: MouseEvent<HTMLElement, globalThis.MouseEvent>
  ) => void;
  pagination?: {
    page: number;
    limit: number;
    onPageChange: any;
    onLimitChange: any;
    total: number | any;
  };
  checkboxes?: boolean;
}

interface IPaginationProps {
  page: number;
  limit: number;
}

const DataTable = ({
  columns,
  data,
  onRowClick,
  rowId,
  pagination,
  checkboxes = true,
}: IProps) => {
  let limit;
  let slicedData;

  if (Array.isArray(data)) {
    limit = pagination?.limit;
    slicedData = limit ? data.slice(0, limit) : data;
  }

  return (
    <DataGridContent>
      <DataGrid
        columns={
          columns.map((col) => ({
            field: col.field,
            headerName: col.name,
            valueGetter: ({ row }) => col.value(row),
            valueFormatter(params) {
              if (params.value?.label != null) {
                return params.value?.label;
              }

              return params.value;
            },
            type: col.type || "string",
            flex: col.flex || 0.7,
          })) as GridColDef[]
        }
        autoHeight
        {...data}
        rows={slicedData}
        getRowId={rowId}
        onRowClick={({ row }, e) => {
          onRowClick!(row, e);
        }}
        checkboxSelection={checkboxes ?? true}
        pagination
        rowsPerPageOptions={[15, 30, 45, 100]}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        rowCount={pagination?.total}
        pageSize={pagination?.limit}
        onPageSizeChange={pagination?.onLimitChange}
        onPageChange={pagination?.onPageChange}
        paginationMode="server"
        page={pagination?.page}
        initialState={{
          pagination: {
            page: pagination?.limit,
            pageSize: pagination?.page,
          },
        }}
        columnM
        // onPageSizeChange={}
      />
    </DataGridContent>
  );
};

export default DataTable;
