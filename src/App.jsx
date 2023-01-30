import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import NotFound from './components/NotFound';

import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
