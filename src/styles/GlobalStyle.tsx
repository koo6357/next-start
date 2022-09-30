import { Global } from '@emotion/react';
import resetStyle from '@/styles/resetStyle';

interface Props {}

export default function GlobalStyle(props: Props) {
  return <Global styles={resetStyle} />;
}
