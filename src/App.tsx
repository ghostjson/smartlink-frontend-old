import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Create from './views/Create';

import Login from './views/Login';
import Register from './views/Register';
import Rewards from './views/Rewards';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot' element={<Navigate to='/create' />} />
        <Route path='/create' element={<Create />} />
        <Route path='/create/rewards' element={<Rewards />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
