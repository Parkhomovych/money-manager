import {COLORS, ThemeColors} from './colors';
import {selectUserSettings, useAppSelector} from '../store';

export const useTheme = () => {
  const {darkMode} = useAppSelector(selectUserSettings);
  const theme: ThemeColors = darkMode ? COLORS.dark : COLORS.light;
  const isDark = darkMode;

  return {theme, isDark};
};
