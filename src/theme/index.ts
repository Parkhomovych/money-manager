import {COLORS} from './colors';
import {FONTS, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS} from './typography';
import {
  SPACING,
  RADIUS,
  ICON_SIZES,
  HEADER_HEIGHT,
  BOTTOM_TAB_HEIGHT,
  INPUT_HEIGHT,
  BUTTON_HEIGHT,
} from './spacing';
import {SHADOWS} from './shadows';

export const theme = {
  colors: COLORS,
  typography: {
    fonts: FONTS,
    sizes: FONT_SIZES,
    weights: FONT_WEIGHTS,
    lineHeights: LINE_HEIGHTS,
  },
  spacing: SPACING,
  radius: RADIUS,
  iconSizes: ICON_SIZES,
  shadows: SHADOWS,
  layout: {
    headerHeight: HEADER_HEIGHT,
    bottomTabHeight: BOTTOM_TAB_HEIGHT,
    inputHeight: INPUT_HEIGHT,
    buttonHeight: BUTTON_HEIGHT,
  },
} as const;
