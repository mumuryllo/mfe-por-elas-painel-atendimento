import { createTheme } from '@mui/material/styles';

export const beautyTheme = createTheme({
  palette: {
    primary: {
      main: '#8C5A40', 
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#E8A798', 
      contrastText: '#4A2F21',
    },
    success: {
      main: '#A3B18A', 
    },
    background: {
      default: '#FAF6F3', 
      paper: '#FFFFFF',
    },
    text: {
      primary: '#3D261B', // Marrom quase preto para acessibilidade máxima (leitura)
      secondary: '#734A35',
    },
  },
  typography: {
    fontFamily: 'var(--font-inter), "Roboto", sans-serif',
    h1: { fontFamily: 'var(--font-playfair), serif' },
    h2: { fontFamily: 'var(--font-playfair), serif' },
    h3: { fontFamily: 'var(--font-playfair), serif', fontWeight: 600 },
    h4: { fontFamily: 'var(--font-playfair), serif', fontWeight: 600 },
    h5: { fontFamily: 'var(--font-playfair), serif', fontWeight: 600 },
    h6: { fontFamily: 'var(--font-playfair), serif', fontWeight: 600 },
    subtitle1: { fontWeight: 600, letterSpacing: '0.5px' },
    button: { fontWeight: 600, letterSpacing: '1px' },
  },
  shape: {
    borderRadius: 16,
  },
});