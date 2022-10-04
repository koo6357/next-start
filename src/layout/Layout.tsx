import React from 'react';
import styled from '@emotion/styled';
import Header from '@/components/header';

import { ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

const Container = styled.div``;

export default Layout;
