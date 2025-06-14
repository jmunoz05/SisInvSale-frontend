import { deleteData, getData, postData, putData } from "./httpservice";

const apiUrl = import.meta.env.VITE_API_URL;

let headers: {} | null = null;

export const setToken = (token: string | null) => {
  headers = { Authorization: `Bearer ${token}` }
};


export const obtenerProductos = async () => {
  try {
    const resp = await getData(`${apiUrl}/api/productos`, headers);
    
    return resp.status === 200 ? resp.data : [];

  } catch (error) {
    console.error("Error al obtener los productos:", error);
    return [];
  }
}

export const crearProducto = async (producto: any) => {
  try {
    const resp = await postData(`${apiUrl}/api/productos`, producto, headers);

    return resp.status === 200 ? resp?.data?.success || false : false;

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
    
    const resp = await deleteData(`${apiUrl}/api/productos/${id}`, headers);
    return resp.status === 200 ? resp?.data?.success || false : false;

  } 
  catch (error) {
    console.error("Error al eliminar el producto:", error);
    return false;
  }
}