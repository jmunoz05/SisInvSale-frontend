import React, { useState } from "react";
import { Box, Chip, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const Home: React.FC = () => {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  interface Producto {
    id: number;
    nombre: string;
    precio: number;
    activo: boolean;
  }

  const productos: Producto[] = [];

  for (let i = 1; i <= 150; i++) {
    productos.push({
      id: i,
      nombre: `Producto ${i}`,
      precio: Math.floor(Math.random() * 100) + 1, // precio aleatorio entre 1 y 100
      activo: Math.random() < 0.5, // true o false aleatoriamente
    });
  }

  const columns = [
    { field: "nombre", headerName: "Nombre", flex: 1 },
    { field: "precio", headerName: "Precio", flex: 1 },
    {
      field: "activo",
      headerName: "Estado",
      renderCell: (params: any) => (
        <Chip
          label={params.value ? "Activo" : "Inactivo"}
          color={params.value ? "success" : "default"}
          size="small"
        />
      ),
    },
  ];

  const rows = productos.map((p) => ({ ...p, id: p.id }));

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
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
            pt: 6
          }}
        >
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
              width: "88%"
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Productos
            </Typography>
          </Box>

          {/* Tabla */}
          <Box sx={{ p: 2 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              autoHeight
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
              pageSizeOptions={[5, 10, 20, 50, 100]}
              sx={{
                border: "none", // quita el borde general
                "& .MuiDataGrid-columnHeaders": {
                  borderBottom: "1px solid #e0e0e0", // opcional: borde inferior para headers
                },
                "& .MuiDataGrid-row": {
                  borderBottom: "1px solid #e0e0e0", // solo la línea inferior de cada fila
                },
                "& .MuiDataGrid-cell": {
                  border: "none", // quita el borde de cada celda
                },
              }}
              disableRowSelectionOnClick
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
