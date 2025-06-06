import axios from 'axios';

export const getData = async (url: string) => {
    try {
        return await axios.get(url);
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


export const getDataBlob = async (url: string) => {
    try {
        return await axios.get(url, {
            responseType: 'blob',  // Especificamos que la respuesta será un blob
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const postData = async (url: string, data: any) => {
    try {
        const headers = data instanceof FormData ? {} : { 'Content-Type': 'application/json' };
        return await axios.post(url, data, { headers });
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

export const putData = async (url: string, data: any = null) => {
    try {
        return await axios.put(url, data);
    } catch (error) {
        console.error('Error updating data:', error);
        throw error;
    }
};

export const deleteData = async (url: string) => {
    try {
        return await axios.delete(url);
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
};