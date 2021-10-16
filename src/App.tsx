import { VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/organizms/login/Login";
import { MainPage } from "./components/pages/MainPage";
import { MapAndPosts } from "./components/pages/MapAndPosts";
import { Posts } from "./components/pages/Posts";
import { SelfProfile } from "./components/pages/SelfProfile";
import { StartPage } from "./components/pages/StartPage";

const App: VFC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<StartPage />} />
          <Route path="posts/" element={<Posts />} />
          <Route path="myprof/" element={<SelfProfile />} />
          <Route path="map/" element={<MapAndPosts />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
