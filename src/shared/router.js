import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from '../pages/intro';
import Main from '../pages/main';
import HeaderBox from './Header/HeaderBox';
import Header from './Header/Header';
import Detail from '../pages/Detail';

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
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
