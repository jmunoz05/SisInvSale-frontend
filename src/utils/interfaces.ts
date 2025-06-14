import type { AlertColor } from "@mui/material";

  export interface ProductoModel {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
  }

  export interface PaginationModel {
    pageSize?: number;
    page?: number;
    rows: any[];
    columns: any[];
    title?: string;
    titletooltip?: string;
    onClickTooltip?: () => void;
  }

 export interface LoadingProps {
    open: boolean;
    mensaje?: string;
  }

  export interface MenuItem {
  text: string;
  icon: React.ReactNode;
  path: string;
}

export interface FormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  formInitial: { nombre: string, precio: number, stock: number};
}

export interface SnackbarModel {
  open: boolean;
  message: string;
  severity?: AlertColor; 
}

export interface SnackbarAlertProps extends SnackbarModel {
  onClose: () => void;
  duration?: number;
}

export interface ConfirmDialogProps {
  open: boolean;
  title?: string;
  message: string;
  onConfirm: (id?: string | number | undefined) => void;
  onCancel: () => void;
}