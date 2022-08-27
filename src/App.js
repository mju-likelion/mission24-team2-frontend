import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './pages/Home';
import Main from './pages/Main';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/main' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
