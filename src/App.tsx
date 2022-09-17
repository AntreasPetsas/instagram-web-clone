import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; import AuthLayout from './Layouts/AuthLayout';
import Feed from './pages/Feed';

import './App.css';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AuthLayout />}>
        {/* <Route index element={<Home />} /> */}
        <Route path='feeds' element={<Feed id={3} name="Helloooo World" />} />
        {/* <Route path='*' element={<Error />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
