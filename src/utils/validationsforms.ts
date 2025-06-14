import * as Yup from "yup";


export const validationProductoForm = Yup.object({
  nombre: Yup.string().required("El nombre es obligatorio"),
  precio: Yup.number()
    .required("El precio es obligatorio")
    .moreThan(0, "Debe ser mayor a 0"),
  stock: Yup.number().min(0, "No puede ser negativo"),
});