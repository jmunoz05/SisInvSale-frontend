import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Tooltip, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import type { PaginationModel } from "../../utils/interfaces";

const nullOnclick = () => console.log('No action defined for tooltip click');

export const GridComponent: React.FC<PaginationModel> = ({pageSize = 5, page = 0, rows = [], columns = [], title = '', titletooltip='', onClickTooltip = nullOnclick}) => {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: pageSize,
    page: page,
  });


  return (
    <>
      <Box
        sx={{
          position: "relative",
          p: 4,
          background: "transparent",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            borderRadius: 2,
            backgroundColor: "white",
            boxShadow: 2,
            pt: title ? 6 : 1,
          }}
        >
          {title && (
            <Box
              sx={{
                position: "absolute",
                top: 8,
                left: 50,
                background: "linear-gradient(to right, #1E88E5, #42A5F5)",
                color: "white",
                px: 3,
                py: 2,
                borderRadius: 2,
                boxShadow: 3,
                width: "88%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {title && (
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {title}
                </Typography>
              )}

              {titletooltip && (
                <Tooltip title={titletooltip} arrow >
                  <IconButton
                    sx={{
                      color: "white",
                      backgroundColor: "#2e7d32",
                      "&:hover": {
                        backgroundColor: "#00D100",
                      },
                      ml: 2                      
                    }}
                    onClick={onClickTooltip}
                  >
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          )}

          <Box sx={{ p: 2 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              autoHeight
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
              pageSizeOptions={[5, 10, 20, 50, 100]}
              localeText={{ noRowsLabel: 'No se encontraron registros' }}
              sx={{
                "& .MuiDataGrid-cell:focus": {
                  outline: "none",
                },
                "& .MuiDataGrid-cell:focus-within": {
                  outline: "none",
                },
                border: "none",
                "& .MuiDataGrid-columnHeaders": {
                  borderBottom: "1px solid #e0e0e0",
                },
                "& .MuiDataGrid-row": {
                  borderBottom: "1px solid #e0e0e0",
                },
                "& .MuiDataGrid-cell": {
                  border: "none",
                },
              }}
              disableRowSelectionOnClick
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
