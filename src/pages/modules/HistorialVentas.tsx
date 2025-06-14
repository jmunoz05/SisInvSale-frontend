import React, { useEffect, useState } from 'react';
import api from '../services/api';
import {
  Container, Typography, Paper, Box, Table, TableHead,
  TableRow, TableCell, TableBody, Divider, Button
} from '@mui/material';


export const HistorialVentas: React.FC = () => {
    
  const [ventas, setVentas] = useState<[]>([]);

  useEffect(() => {
    const cargarVentas = async () => {
      const res = await api.get('/ventas');
      setVentas(res.data);
    };
    cargarVentas();
  }, []);

  const reversarVenta = async (id:string) => {
    try {
      await api.put(`/ventas/${id}/reversar`);
      setVentas(await (await api.get('/ventas')).data); // recarga el listado de ventas
    } catch (error) {
      console.error('Error al reversar venta:', error);
    }
  };
  
    return (
    <>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Historial de Ventas
        </Typography>

        {ventas.map((venta) => {
          const total = venta.productos.reduce(
            (acc, p) => acc + p.producto.precio * p.cantidad,
            0
          );
          const fecha = new Date(venta.fecha).toLocaleString();

          return (
            <Paper key={venta._id} sx={{ mb: 4, p: 2 }}>
              <Typography variant="h6">
                Cliente: {venta.cliente?.nombre}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Fecha: {fecha}
              </Typography>

              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Producto</TableCell>
                    <TableCell>Cantidad</TableCell>
                    <TableCell>Precio</TableCell>
                    <TableCell>Subtotal</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {venta.productos.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell>{item.producto?.nombre}</TableCell>
                      <TableCell>{item.cantidad}</TableCell>
                      <TableCell>${item.producto?.precio}</TableCell>
                      <TableCell>
                        ${item.cantidad * item.producto?.precio}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <Divider sx={{ my: 1 }} />
              <Typography variant="subtitle1">Total: ${total}</Typography>

              {/* Mostrar botón de reversar solo si la venta no ha sido reversada */}
              {!venta.reversada && (
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => reversarVenta(venta._id)}
                  sx={{ mt: 1 }}
                >
                  Reversar venta
                </Button>
              )}
              {venta.reversada && (
                <Typography color="error" sx={{ mt: 1 }}>
                  Venta reversada
                </Typography>
              )}
            </Paper>
          );
        })}
      </Container>
    </>
  );
};

/*

import React, { useEffect, useState } from 'react';
import api from '../services/api';
import {
  Container, Typography, Paper, Box, Table, TableHead,
  TableRow, TableCell, TableBody, Divider, Button
} from '@mui/material';

function HistorialVentas() {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const cargarVentas = async () => {
      const res = await api.get('/ventas');
      setVentas(res.data);
    };
    cargarVentas();
  }, []);

  const reversarVenta = async (id) => {
    try {
      await api.put(`/ventas/${id}/reversar`);
      setVentas(await (await api.get('/ventas')).data); // recarga el listado de ventas
    } catch (error) {
      console.error('Error al reversar venta:', error);
    }
  };

  return (
    
  );
}

export default HistorialVentas;

*/
