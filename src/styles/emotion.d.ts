import '@emotion/react';
import { colorsType } from '@/styles/theme';

declare module '@emotion/react' {
  export interface Theme {
    bd1: string;
    bd2: string;
    bd3: string;
    bg1: string;
    bg2: string;
    bg3: string;
    text1: string;
    text2: string;
    text3: string;
    colors: colorsType;
  }
}
