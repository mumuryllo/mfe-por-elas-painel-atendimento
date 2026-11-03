import { createTheme } from '@mui/material/styles';
import { THEME_COLORS, THEME_FONTS, THEME_SIZES } from '../constants/theme';

export const beautyTheme = createTheme({
  palette: {
    primary: { main: THEME_COLORS.primary, contrastText: THEME_COLORS.paper },
    secondary: { main: THEME_COLORS.secondary, contrastText: THEME_COLORS.textPrimary },
    success: { main: THEME_COLORS.success },
    background: { default: THEME_COLORS.background, paper: THEME_COLORS.paper },
    text: { primary: THEME_COLORS.textPrimary, secondary: THEME_COLORS.textSecondary },
  },
  typography: {
    fontFamily: THEME_FONTS.body,
    h1: { fontFamily: THEME_FONTS.heading },
    h2: { fontFamily: THEME_FONTS.heading },
    h3: { fontFamily: THEME_FONTS.heading, fontWeight: 600 },
    h4: { fontFamily: THEME_FONTS.heading, fontWeight: 600 },
    h5: { fontFamily: THEME_FONTS.heading, fontWeight: 600 },
    h6: { fontFamily: THEME_FONTS.heading, fontWeight: 600 },
    subtitle1: { fontWeight: 600, letterSpacing: '0.5px' },
    button: { fontWeight: 600, letterSpacing: '1px' },
  },
  shape: {
    borderRadius: THEME_SIZES.borderRadius,
  },
});