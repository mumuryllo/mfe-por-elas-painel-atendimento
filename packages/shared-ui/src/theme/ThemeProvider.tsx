import React from 'react';
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material';
import { beautyTheme } from './index';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MUIThemeProvider theme={beautyTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};