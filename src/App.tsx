import React from 'react';
import {Routes, Route} from 'react-router-dom'
import AuthLayout from './Layouts/AuthLayout';
import Feed from './pages/Feed';

import './App.css';

function App() {

  return (
      <Routes>
        <Route path={"/feed"}>
          <AuthLayout>
            <Feed id={3} name="hello world"/>
          </AuthLayout>
        </Route>
      </Routes>
  );
}

export default App;
