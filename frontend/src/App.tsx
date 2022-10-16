import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./Layouts/AuthLayout";
import NoAuthLayout from "./Layouts/NoAuthLayout";
import Feed from "./pages/Feed";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Me from "./pages/Me";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import "./assets/styles/App.scss";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <NoAuthLayout>
              <Login />
            </NoAuthLayout>
          }
        />
        <Route
          path="/register"
          element={
            <NoAuthLayout>
              <Register />
            </NoAuthLayout>
          }
        />
        <Route
          path="/feeds"
          element={
            <AuthLayout>
              <Feed id={3} name="Helloooo World" />
            </AuthLayout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <PrivacyPolicy />
          } 
        />
        <Route 
          path="/me"
          element={
            <AuthLayout HideRightSide={true}>
              <Me />
            </AuthLayout>
          }
        />
        <Route
          path="*"
          element={
            <NoAuthLayout>
              <Error />
            </NoAuthLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
