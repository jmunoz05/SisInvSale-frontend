import React from 'react';
import { CircularProgress, Typography, Backdrop } from '@mui/material';
import type { LoadingProps } from '../../utils/interfaces';

export const Loading: React.FC<LoadingProps> = ({ mensaje = "Cargando..." , open = false}) => {
  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <div style={{ textAlign: "center" }}>
        <CircularProgress color="inherit" sx={{color:"skyblue"}} />
        <Typography variant="h6" mt={2} sx={{color:"#fff"}}>
          {mensaje}
        </Typography>
      </div>
    </Backdrop>
  );
};