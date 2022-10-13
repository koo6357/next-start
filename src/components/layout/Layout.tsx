import React from 'react';
import styled from '@emotion/styled';
import Header from '@/components/header';

import { ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

export const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <Container>{children}</Container>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.bg1};
  color: ${({ theme }) => theme.text1};
`;

export default Layout;
