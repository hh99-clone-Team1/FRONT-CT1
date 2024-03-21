import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header/Header';
import HeaderBox from './Header/HeaderBox';

function Layout() {
  return (
    <>
      <HeaderBox>
        <Header />
      </HeaderBox>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
}

export default Layout;

const MainLayout = styled.div`
  padding-top: 80px;
`;
