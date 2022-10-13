export const palette = {
  gray1: '#FAFAFA',
  gray2: '#F5F5F5',
  gray3: '#EEEEEE',
  gray4: '#E0E0E0',
  gray5: '#BDBDBD',
  gray6: '#9E9E9E',
  gray7: '#757575',
  gray8: '#616161',
  gray9: '#424242',
  gray10: '#212121',
};

export const themes = {
  dark: {
    bd1: '#3b4253',
    bd2: '#363e50',
    bd3: '#363e50',
    bg1: '#1c1f25',
    bg2: '#282c35',
    bg3: '#343d55',
    text1: '#d0d2d6',
    text2: '#b4b7bd',
    text3: '#a2a4a8',
  },
  light: {
    bd1: '#eee',
    bd2: '#ddd',
    bd3: '#ccc',
    bg1: '#f6f6f6',
    bg2: '#fff',
    bg3: '#eee',
    text1: '#5e5873',
    text2: '#6e6b7b',
    text3: '#868393',
  },
};

export const colors = {
  ...palette,
  primary: '#a5ca4f',
  secondary: '#82868b',
  success: '#28c76f',
  info: '#00cfe8',
  warning: '#ff9f43',
  danger: '#ea5455',
  white: '#ffffff',
  black: '#000000',
};

export type colorsType = typeof colors;
