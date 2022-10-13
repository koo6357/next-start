import styled from '@emotion/styled';
import Link from 'next/link';
import ThemeModeCtrl from '@/components/themeModeCtrl';

export const Header = () => {
  return (
    <Container>
      <LeftContents>
        <Logo>
          <Link href={'/'}>
            <a>Koo</a>
          </Link>
        </Logo>
      </LeftContents>
      <RightContents>
        <Nav>
          <NavItem>
            <Link href={'/'}>
              <a>home</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href={'/about'}>
              <a>about</a>
            </Link>
          </NavItem>
        </Nav>
        <ThemeModeCtrl />
      </RightContents>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid #ddd;
`;

const LeftContents = styled.div`
  display: flex;
  align-items: center;
`;

const RightContents = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.div``;

const Nav = styled.nav`
  display: flex;
`;

const NavItem = styled.div`
  padding: 0 10px;
  margin: 0 10px;
  a {
    display: flex;
    align-items: center;
    height: 70px;
  }
`;

export default Header;
