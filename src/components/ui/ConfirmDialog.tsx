import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  IconButton,
  Box,
} from '@mui/material';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import CloseIcon from '@mui/icons-material/Close';
import type { ConfirmDialogProps } from '../../utils/interfaces';

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  title = '¿Estás seguro?',
  message,
  onConfirm = () => {},
  onCancel,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          p: 2,
          position: 'relative',
        },
      }}
    >
      <IconButton
        onClick={onCancel}
        sx={{ position: 'absolute', top: 8, right: 8, color: 'grey.500' }}
      >
        <CloseIcon />
      </IconButton>

      <Box textAlign="center" mt={1}>
        <WarningAmberRoundedIcon color="warning" sx={{ fontSize: 50 }} />
        <DialogTitle sx={{ fontWeight: 'bold', mt: 1 }}>{title}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{message}</Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', mt: 2 }}>
          <Button onClick={onCancel} variant="outlined" color="inherit">
            Cancelar
          </Button>
          <Button onClick={ () => onConfirm() } variant="contained" color="warning">
            Confirmar
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};