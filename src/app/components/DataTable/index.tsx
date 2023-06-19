import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface DataTableProps {
  data: any[];
  columns: GridColDef[];
}

const DataTable = ({ data, columns }: DataTableProps) => {
  return (
    <DataGrid
      rows={data}
      columns={columns}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
  );
};

export default DataTable;
