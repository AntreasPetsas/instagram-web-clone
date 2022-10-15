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
import { PostType } from "./pages/Me";

function App() {

  const post1: PostType = {
    id : "post1",
    caption : "asd1",
    media_type : "asd",
    media_url : "https://www.mountmania.com/uploads/img/highest-mountain-in-nepal",
    permalink : "asd",
    thumbnail_url : "asd",
    timestamp : new Date(),
    username : "asd",
  }
  const post2: PostType = {
    id : "post2",
    caption : "asd2",
    media_type : "asd",
    media_url : "https://peakvisor.com/photo/Nepal-Khumbu-valley-Solukhumbu.jpg",
    permalink : "asd",
    thumbnail_url : "asd",
    timestamp : new Date(),
    username : "asd",
  }

  const posts: Array<PostType> = new Array<PostType>(2);
  posts.push(post1);
  posts.push(post2);

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
              <Me 
                UserName = "Andreas Petsas"
                posts={posts}
              />
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
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
