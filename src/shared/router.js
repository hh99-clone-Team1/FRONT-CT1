import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Intro from '../pages/intro';
import Main from '../pages/main';
import Detail from '../pages/detail';
import HeaderBox from './Header/HeaderBox';
import Header from './Header/Header';

function Router() {
  const user = 'test';

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
          path="/detail"
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
