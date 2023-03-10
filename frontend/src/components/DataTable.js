import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { FastRewind } from "@mui/icons-material";

export default function DataTable(props) {
  // const [select, setSelection] = useState(startPage); // the row that is selected needs to passed to the paper element
  const newRows = []
  var id = 1;
  if (props.view === "announcements") {
    for (let row in props.rows) {
      newRows.push(new Map([
        ["id", id++],
        ["dueDate", row.post_date],
        ["title", row.title],
        ["description", row.message],
        ["course", row.course]
      ]))
    }
  } else if (props.view === 'assignments') {
  
  }
  return (
    <div style={{ height: "80vh", width: "90%" }}>
      <DataGrid
        rows={props.view ==="assignments" ? props.rows : newRows}
        columns={[
          { field: "dueDate", headerName: "Due Date", type: "date", editable: true },
          { field: "course", headerName: "Course", editable: true },
          { field: "title", headerName: "Title", editable: true },
          {
            field: "description",
            headerName: "Description",
            description: "This column is not sortable.",
            sortable: false,
            flex: 1,
            // valueGetter: (params) =>
            //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
          },
          {
            field: "completed",
            headerName: "",
            sortable: false,
          },
        ]}
        onRowClick={(e) => {
          // setSelection(e.row);
          console.log(e.row);
          props.tableToPaper(e.row);
        }}
        sx={{
          backgroundColor: "#141204",
          color: "white",
          "& .MuiSvgIcon-root, .MuiTablePagination-root, .MuiSelect-select, .MuiTablePagination-actions":
            {
              color: "white",
            },
          "& .MuiDataGrid-iconSeparator": { display: "none" },
        }}
      />
    </div>
  );
}

// const handleRowSelection = (e) => {
//   setSelection(e.selectionModel);
// };
