import { getData, putData } from "./httpservice"

const apiUrl = import.meta.env.VITE_API_URL;

export const cargarVentas = async () => {  
   try {
         return await getData(`${apiUrl}/api/ventas`)
   } catch {
        return [];
   }
}

export const reversarVenta = async (id:string) => {
    try {
      return await putData(`/ventas/reversar/${id}`);
    } catch (error) {
      console.error('Error al reversar venta:', error);
    }
  };