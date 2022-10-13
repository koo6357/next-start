import React from 'react';

import { ThemeProvider as EmotionStyleProvider } from '@emotion/react';

import { useAppSelector } from '@/modules/hooks';
import GlobalStyle from '@/styles/globalStyle';
import { colors, themes } from '@/styles/theme';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeMode = useAppSelector((state) => state.app.themeMode);
  const theme = themes[themeMode] || themes.light;

  return (
    <EmotionStyleProvider
      theme={{
        colors,
        ...theme,
      }}
    >
      <GlobalStyle />
      {children}
    </EmotionStyleProvider>
  );
};
