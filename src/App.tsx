import { VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/organizms/login/Login";
import { MainPage } from "./components/pages/MainPage";
import { MapAndPosts } from "./components/pages/MapAndPosts";
import { PostDetail } from "./components/pages/PostDetail";
import { Posts } from "./components/pages/Posts";
import { SelfProfile } from "./components/pages/SelfProfile";
import { StartPage } from "./components/pages/StartPage";
import { UserProfile } from "./components/pages/UserProfile";
import { Users } from "./components/pages/Users";

const App: VFC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<StartPage />} />
          <Route path="posts/" element={<Posts />}>
            <Route path=":id" element={<PostDetail />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":id" element={<UserProfile />} />
            <Route path="myprof/" element={<SelfProfile />} />
          </Route>
          <Route path="map/" element={<MapAndPosts />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
