import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './pages/Home';
import ReviewDetail from './pages/ReviewDetail';
import ReviewList from './pages/ReviewList';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Write from './pages/Write';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/review-list' element={<ReviewList />} />
          <Route path='/review-detail/:id' element={<ReviewDetail />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/write' element={<Write />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
