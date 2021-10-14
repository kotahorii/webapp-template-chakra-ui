import { VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/organizms/login/Login";
import { MainPage } from "./components/pages/MainPage";
import { Posts } from "./components/pages/Posts";
import { SelfProfile } from "./components/pages/SelfProfile";

const App: VFC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainPage />}>
          <Route path="posts/" element={<Posts />} />
          <Route path="myprof/" element={<SelfProfile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
