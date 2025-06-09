import { getData, postData, putData } from "./httpservice";

const apiUrl = import.meta.env.VITE_API_URL;

export const cargarVentas = async () => {
  try {
    return await getData(`${apiUrl}/api/ventas`);
  } catch {
    return [];
  }
};

export const crearVenta = async (venta: any) => {
  try {
    return await postData(`${apiUrl}/api/ventas`, venta);
  } catch {
    return false;
  }
};

export const reversarVenta = async (id: string) => {
  try {
    return await putData(`/ventas/reversar/${id}`);
  } catch (error) {
    console.error("Error al reversar venta:", error);
  }
};
