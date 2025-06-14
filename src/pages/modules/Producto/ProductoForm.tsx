import React, { useEffect } from "react";
import {  Dialog,  DialogTitle,  DialogContent,  DialogActions,  TextField,  Button,  Box } from "@mui/material";
import { useFormik } from "formik";
import type { FormModalProps } from "../../../utils/interfaces";
import { validationProductoForm } from "../../../utils/validationsforms";

export const ProductoForm: React.FC<FormModalProps> = ({
  open,
  onClose,
  onSubmit,
  formInitial
  
}) => {

  useEffect(() => {
  formik.resetForm();
  }, [formInitial]);    

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formInitial,
    validationSchema: validationProductoForm,
    onSubmit: (values) => {
      onSubmit(values);
      onClose();
    },
  });


  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "20px",
          padding: 2,
          backgroundColor: "#f4f4f4",
          boxShadow:
            "0 0 20px rgba(0, 200, 255, 0.4), 0 0 30px rgba(0, 150, 255, 0.15)",
          color: "#1e1e1e",
        },
      }}
    >
      <DialogTitle
        sx={{
          borderRadius: 2,
          textAlign: "center",
          fontWeight: "bold",
          color: "#fff",
          background: "linear-gradient(to right, #1E88E5, #42A5F5)",
        }}
      >
        {formInitial.nombre ? "Editar Producto" : "Agregar Producto"}
      </DialogTitle>

      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2} mt={1}>
            <TextField
              label="Nombre"
              name="nombre"
              fullWidth
              variant="outlined"
              value={formik.values.nombre}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.nombre && Boolean(formik.errors.nombre)}
              helperText={formik.touched.nombre && formik.errors.nombre}
            />

            <TextField
              label="Precio"
              name="precio"
              type="number"
              fullWidth
              variant="outlined"
              value={formik.values.precio}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.precio && Boolean(formik.errors.precio)}
              helperText={formik.touched.precio && formik.errors.precio}
              inputProps={{ min: 0, step: "0.01" }}
            />

            <TextField
              label="Stock"
              name="stock"
              type="number"
              fullWidth
              variant="outlined"
              value={formik.values.stock}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.stock && Boolean(formik.errors.stock)}
              helperText={formik.touched.stock && formik.errors.stock}
              inputProps={{ min: 0 }}
            />
          </Box>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2, justifyContent: "space-between" }}>
          <Button onClick={onClose} color="inherit">
            Cancelar
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Guardar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
