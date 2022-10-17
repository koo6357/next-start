import styled from '@emotion/styled';
import Head from 'next/head';

export const Home = () => {
  return (
    <Container>
      <Head>
        <title>MyApp</title>
        <meta name="description" content="next app starter" />
      </Head>
      <h1>Hello world</h1>
    </Container>
  );
};

const Container = styled.div`
  height: 4000px;
  background: rgba(17, 136, 255, 0.19);
`;

export default Home;
