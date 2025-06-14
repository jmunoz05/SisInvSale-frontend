import React, { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import { ActionMenu } from "../../../components/common/ActionMenu";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import type { ProductoModel, SnackbarModel } from "../../../utils/interfaces";
import { GridComponent } from "../../../components/common/GridComponent";
import { Loading } from "../../../components/ui/Loading";
import { ProductoForm } from "./ProductoForm";
import {
  crearProducto,
  eliminarProducto,
  obtenerProductos,
  setToken,
} from "../../../services/productoservice";
import { useAuth } from "../../../context/AuthContext";
import SnackbarAlert from "../../../components/ui/SnackbarAlert";
import { ConfirmDialog } from "../../../components/ui/ConfirmDialog";
import { useMemo } from "react";

export const Producto: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);  
  const [open, setOpen] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState<boolean>(false);
  const [openSnackbarAlert, setOpenSnackbarAlert] = useState<SnackbarModel>({
    open: false,
    message: "",
    severity: "success",
  });
  const [productos, setProductos] = useState<[]>([]);
  const [idToDelete, setIdToDelete] = useState<string>('');

  const [initialForm, setInitialForm ] = useState({ nombre: "", precio: 0, stock: 0 });

  const { token } = useAuth();

  setToken(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NGM5MTI5NTQ2OWQxYzExY2NjOTdhMCIsImlhdCI6MTc0OTg0ODU0NywiZXhwIjoxNzQ5ODkxNzQ3fQ.dC3IDI9msnEEU0efvQLEz0YAf_uSLP8G-y2NQP-KXKQ"
  );

  useEffect(() => {
    fetchProductos();
  }, []);

   const fetchProductos = async () => {
      
      setLoading(true);

      try {
        const response = await obtenerProductos();
        setProductos(response);
      } 
      catch (error) {
        setOpenSnackbarAlert({
          open: true,
          message: "Error al cargar los productos",
          severity: "error",
        });
      } 
      finally {
        setLoading(false);
      }
    };

  const handleSave = async (data: ProductoModel) => {
    setLoading(true);
    try {
      const resp = await crearProducto(data);
      if (!resp) throw new Error("Error al crear el producto");

      await fetchProductos();
      setOpenSnackbarAlert({
        open: true,
        message: "Éxito al crear el producto",
        severity: "success",
      });
    } 
    catch (error) {
      setOpenSnackbarAlert({
        open: true,
        message: "Error al crear el producto",
        severity: "error",
      });
    } 
    finally {
      setLoading(false);
    }
  };

  const columns = useMemo(() => [
    { field: "nombre", headerName: "Nombre", flex: 1 },
    { field: "precio", headerName: "Precio", flex: 1 },
    { field: "stock", headerName: "stock", flex: 1 },
    {
      field: "acciones",
      headerName: "",
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      align: "right",
      renderCell: (params: any) => (
        <ActionMenu
          row={params.row}
          actions={[
            {
              label: "Editar",
              icon: <EditIcon fontSize="small" />,
              onClick: (row) => console.log("Editar producto", row),
            },
            {
              label: "Detalles",
              icon: <VisibilityIcon fontSize="small" />,
              onClick: (row) => console.log("Ver detalles", row),
            },
            {
              label: "Eliminar",
              icon: <DeleteIcon fontSize="small" />,
              onClick: (row) =>  { setIdToDelete(row.id); setOpenConfirmDialog(true) }
            }
          ]}
        />
      ),
    },
  ],[]);

  const handleDelete = async (id: string) => {

    setOpenConfirmDialog(false)
    setLoading(true);

    try {
     const resp = await eliminarProducto(id);
      if (!resp) throw new Error("Error al eliminar el producto");

      await fetchProductos();
      setOpenSnackbarAlert({
        open: true,
        message: "Éxito al eliminar el producto",
        severity: "success",
      });
    } 
    catch (error) {
      setOpenSnackbarAlert({
        open: true,
        message: "Error al eliminar el producto",
        severity: "error",
      });
    } 
    finally {
      setLoading(false);
    }
  }


  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <GridComponent
          columns={columns}
          rows={productos}
          title="Productos"
          titletooltip="Agregar producto"
          onClickTooltip={() => {
            setOpen(true);
            setInitialForm({ nombre: "", precio: 0, stock: 0 });
          }}
        />
      </Box>

      <ProductoForm
        open={open}
        onClose={() => {
          setInitialForm({ nombre: "", precio: 0, stock: 0 });
          setOpen(false);          
        }}
        onSubmit={handleSave}
        formInitial={initialForm}
      />

      <ConfirmDialog
        open={openConfirmDialog}
        message="¿Deseas eliminar este producto? Esta acción no se puede deshacer."
        onConfirm={() => handleDelete(idToDelete)}
        onCancel={() => setOpenConfirmDialog(false)}
      />
      <SnackbarAlert
        open={openSnackbarAlert.open}
        message={openSnackbarAlert.message}
        severity={openSnackbarAlert.severity}
        onClose={() =>
          setOpenSnackbarAlert((prev) => ({ ...prev, open: false }))
        }
      />
      <Loading open={loading}></Loading>
    </>
  );
};
