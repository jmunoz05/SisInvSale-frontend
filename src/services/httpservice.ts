import axios from 'axios';

export const getData = async (url: string, headers:any={}) => {
    try {
        return (await axios.get(url, {headers: headers}));
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


export const getDataBlob = async (url: string, headers:any={}) => {
    try {
        return await axios.get(url, {
            responseType: 'blob',
            headers: headers
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const postData = async (url: string, data: any, headers:any={}) => {
    try {
        const headersjson = data instanceof FormData ? {} : { 'Content-Type': 'application/json' };
        return await axios.post(url, data, { headers: { ...headersjson, ...headers } });
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

export const putData = async (url: string, data: any = null, headers:any={}) => {
    try {
        return await axios.put(url, data, { headers: headers });
    } catch (error) {
        console.error('Error updating data:', error);
        throw error;
    }
};

export const deleteData = async (url: string, headers:any={}) => {
    try {
        return await axios.delete(url, { headers: headers });
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
};