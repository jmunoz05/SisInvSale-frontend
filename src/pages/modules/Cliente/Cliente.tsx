import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { setToken, obtenerClientes } from '../../../services/clienteservice';
import { useAuth } from '../../../context/AuthContext';

export const Cliente:React.FC = () => {

  const { token } = useAuth();
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    
    setToken(token);

    const getdata = async () => {
        const data = await obtenerClientes();
        setClientes(data)
    }

    getdata();
  }, []);


    return (

    <Container>
      <Typography variant="h4" gutterBottom>Clientes</Typography>
      {clientes.map((c: any) => (
        <>
        <div>{c.nombre}</div>
        <div>{c.eamil}</div>
        <div>{c.telefono}</div>
        </>
      ))}
    </Container>

    )
}