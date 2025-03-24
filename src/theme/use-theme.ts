import {COLORS, ThemeColors} from './colors';
import {authSelectors, useAppSelector} from '../store';

export const useTheme = () => {
  const {darkMode} = useAppSelector(authSelectors.selectUserSettings);
  const theme: ThemeColors = darkMode ? COLORS.dark : COLORS.light;
  const isDark = darkMode;

  return {theme, isDark};
};
