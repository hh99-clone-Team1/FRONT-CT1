import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from '../pages/intro';
import Main from '../pages/main';
import Detail from '../pages/detail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/main" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
