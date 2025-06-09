import { deleteData, getData, postData, putData } from "./httpservice";

const apiUrl = import.meta.env.VITE_API_URL;

let headers: {} | null = null;

export const setToken = (token: string | null) => {
  headers = { Authorization: `Bearer ${token}` }
};

export const obtenerClientes = async () => {
  try {

    const response = await getData(`${apiUrl}/api/clientes`, headers);

    if(response)
      return response.data;
    else
      return [];
    
  } catch (error) {
    console.error("Error al obtener el cliente:", error);
    return [];
  }
}

export const crearCliente = async (cliente: any) => {
  try {
    return await postData(`${apiUrl}/api/clientes`, cliente, headers);
  } catch (error) {
    console.error("Error al crear el cliente:", error);
    return false;
  }
}

export const actualizarCliente = async (id: string, cliente: any) => {
  try {
    return await putData(`${apiUrl}/api/clientes/${id}`, cliente, headers);
  } catch (error) {
    console.error("Error al actualizar el cliente:", error);
    return false;
  }
}

export const eliminarCliente = async (id: string) => {
  try {
    return await deleteData(`${apiUrl}/api/clientes/${id}`, headers);
  } catch (error) {
    console.error("Error al eliminar el cliente:", error);
    return false;
  }
}
