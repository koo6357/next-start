import styled from '@emotion/styled';

export const ContentContainer = styled.div<{ maxWidth?: number }>`
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '1100px')};
  margin: 0 auto;
  padding: 0 30px;
`;

export const Page = styled.div`
  flex: 1;
  padding: 70px 0;
`;

export const H1 = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text1};
`;

export const H2 = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text1};
`;

export const H3 = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text1};
`;
