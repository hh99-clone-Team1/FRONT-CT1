import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from '../pages/Intro/Intro';
import Main from '../pages/main';
import HeaderBox from './Header/HeaderBox';
import Header from './Header/Header';
import Detail from '../pages/Detail/Detail';
import MyPage from '../pages/MyPage/MyPage';
import AddImage from '../pages/AddImage/AddImage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route
          path="/main"
          element={
            <>
              <HeaderBox>
                <Header />
              </HeaderBox>
              <Main />
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <>
              <HeaderBox>
                <Header />
              </HeaderBox>
              <Detail />
            </>
          }
        />
        <Route
          path="/mypage"
          element={
            <>
              <HeaderBox>
                <Header />
              </HeaderBox>
              <MyPage />
            </>
          }
        />
        <Route
          path="/addImage"
          element={
            <>
              <HeaderBox>
                <Header />
              </HeaderBox>
              <AddImage />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
