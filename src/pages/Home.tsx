import React, { useState } from "react";
import { Box, Chip, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Tooltip, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ActionMenu } from "../components/ActionMenu";
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

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
      {
    field: 'acciones',
    headerName: '',
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    align: 'right',
    renderCell: (params:any) => <ActionMenu row={params.row} actions={[
          {
            label: 'Editar',
            icon: <EditIcon fontSize="small" />,
            onClick: (row) => console.log('Editar producto', row),
          },
          {
            label: 'Detalles',
            icon: <VisibilityIcon fontSize="small" />,
            onClick: (row) => console.log('Ver detalles', row),
          },
          {
            label: 'Eliminar',
            icon: <DeleteIcon fontSize="small" />,
            onClick: (row) => console.log('Eliminar producto', row),
          },
        ]} />
  }
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
            pt: 6,
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
              width: "88%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Productos
            </Typography>

            <Tooltip title="Agregar producto" arrow>
            <IconButton
              sx={{
                color: "white",
                backgroundColor: "#2e7d32",
                "&:hover": {
                  backgroundColor: "#00D100",
                },
                ml: 2,
              }}
              onClick={() => {
                console.log("Agregar producto");
              }}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
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
                    '& .MuiDataGrid-cell:focus': {
                    outline: 'none',
                    },
                    '& .MuiDataGrid-cell:focus-within': {
                  outline: 'none',
            },
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
