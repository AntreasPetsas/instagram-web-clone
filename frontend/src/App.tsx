import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import AuthLayout from './Layouts/AuthLayout';
import NoAuthLayout from "./Layouts/NoAuthLayout";
import Feed from './pages/Feed';
import Register from './pages/Register';
import Login from './pages/Login';

import './App.css';

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<NoAuthLayout>
          <Login />
        </NoAuthLayout>} />
        <Route path='/register' element={<NoAuthLayout>
          <Register />
        </NoAuthLayout>} />
        {/* <Route index element={<Home />} /> */}
        <Route path='/feeds' element={<AuthLayout>
          <Feed id={3} name="Helloooo World" />
        </AuthLayout>} />
        {/* <Route path="*" element={<Navigate to="/feeds" replace />}/> */}
        {/* <Route path='*' element={<Error />} /> */}
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
