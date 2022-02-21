import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";

const columns = [
  { field: "Brand", headerName: "Brand", width: 70 },
  { field: "model", headerName: "Model", width: 130 },
  { field: "sn", headerName: "Serial number", width: 130 },
  {
    field: "FA",
    headerName: "Inventory number",
    width: 90,
  },
  {
    field: "Owner",
    headerName: "Owner",
    width: 160,
  },
  {
    field: "Responsible",
    headerName: "Responsible",
    width: 160,
  },
  {
    field: "Department",
    headerName: "Department",
    width: 160,
  },
  {
    field: "Notes",
    headerName: "Notes",
    width: 160,
  },
];

export default function DataTable({ rows }) {
  console.log(rows);
  const [tableData, setTableData] = useState([]);

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
