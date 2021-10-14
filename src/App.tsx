import { VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/pages/Login";
import { MainPage } from "./components/pages/MainPage";
import { SelfProfile } from "./components/pages/SelfProfile";

const App: VFC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="main/" element={<MainPage />}>
          <Route path="myprof/" element={<SelfProfile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
