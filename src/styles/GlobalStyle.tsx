import { css, Global } from '@emotion/react';

import resetStyle from '@/styles/resetStyle';

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${resetStyle};
        body {
          font-family: 'Montserrat', 'Noto Sans KR', sans-serif;
        }
      `}
    />
  );
}
