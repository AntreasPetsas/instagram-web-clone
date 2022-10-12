import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./Layouts/AuthLayout";
import NoAuthLayout from "./Layouts/NoAuthLayout";
import Feed from "./pages/Feed";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Error from "./pages/Error";
import "./App.css";
import "./assets/styles/App.scss";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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
          path="*"
          element={
            <NoAuthLayout>
              <Error />
            </NoAuthLayout>
          }
        />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
