import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    functions: {
      linearGradient: (color1: string, color2: string) => string;
       rgba: (color: string, opacity: number) => string;
       boxShadow: (offset: [number, number], blur: [number, number], color: string, opacity?: number) => string;
       pxToRem: (value: number) => string;
    };
    borders: {
      borderRadius: {
        [key: string]: string | number;
      };
    };
    boxShadows: {
      [key: string]: string;
      colored?: {
        [key: string]: string;
      };
    };
  }

  interface ThemeOptions {
    functions?: {
      linearGradient?: (color1: string, color2: string) => string;
    };
    borders?: {
      borderRadius?: {
        [key: string]: string | number;
      };
    };
    boxShadows?: {
      [key: string]: string;
      colored?: {
        [key: string]: string;
      };
    };
  }

    interface Palette {
    gradients?: {
      [key: string]: {
        main: string;
        state: string;
      };
    };
    white?: {
      main: string;
    };
    transparent: {
      main: string;
    };
  }

  interface PaletteOptions {
    gradients?: {
      [key: string]: {
        main: string;
        state: string;
      };
    };
    white?: {
      main: string;
    };
    transparent?: {
      main: string;
    };
  }
  
}