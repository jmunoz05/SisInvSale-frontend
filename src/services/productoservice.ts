import { deleteData, getData, postData, putData } from "./httpservice";
import { useAuth } from '../context/AuthContext';

const apiUrl = import.meta.env.VITE_API_URL;
const { token } = useAuth();
const headers = { Authorization: `Bearer ${token}` }


export const obtenerProductos = async () => {
  try {
    return await getData(`${apiUrl}/api/productos`, headers);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    return [];
  }
}

export const crearProducto = async (producto: any) => {
  try {
    return await postData(`${apiUrl}/api/productos`, producto, headers);
  } catch (error) {
    console.error("Error al crear el producto:", error);
    return false;
  }
}

export const actualizarProducto = async (id: string, producto: any) => {
  try {
    return await putData(`${apiUrl}/api/productos/${id}`, producto, headers);
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    return false;
  }
}

export const eliminarProducto = async (id: string) => {
  try {
    return await deleteData(`${apiUrl}/api/productos/${id}`, headers);
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    return false;
  }
}