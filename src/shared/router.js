import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Intro from '../pages/intro';
import Main from '../pages/main';
import Detail from '../pages/detail';

function Router() {
  const user = 'test';

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/detail" element={<Detail />} />
          </Route>
        ) : (
          <Route path="/" element={<Intro />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
