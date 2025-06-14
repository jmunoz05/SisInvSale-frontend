import React from 'react';
import { Snackbar, Alert, LinearProgress, Box } from '@mui/material';
import type { SnackbarAlertProps } from '../../utils/interfaces';

const SnackbarAlert: React.FC<SnackbarAlertProps> = ({
  open,
  message,
  severity = 'info',
  onClose,
  duration = 6000,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%', p: 0, overflow: 'hidden', position: 'relative' }}>
        <Box px={2} py={1}>{message}</Box>
        <LinearProgress
          variant="determinate"
          value={100}
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            animation: `consume ${duration}ms linear forwards`,
            '& .MuiLinearProgress-bar': {
              backgroundColor: severity === 'success'
                ? '#4caf50'
                : severity === 'error'
                ? '#f44336'
                : severity === 'warning'
                ? '#ff9800'
                : '#2196f3',
            },
          }}
        />
        {/* Animación CSS */}
        <style>
          {`
            @keyframes consume {
              from { width: 100%; }
              to { width: 0%; }
            }
          `}
        </style>
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;
