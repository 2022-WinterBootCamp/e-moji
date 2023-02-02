import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FirstPage from "./pages/FirstPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/common/Header";
import MyPage from "./pages/MyPage";
import AuthRouter from "./auth/AuthRouter";
import Register from "./pages/Register";
import FirstExample from "./pages/FirstExample";
import Video from "./components/firstpage/Video";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<AuthRouter authAble={false} />}>
          <Route path="/" element={<FirstExample />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/video" element={<Video/>}/>
        </Route>

        <Route element={<AuthRouter authAble={true} />}>
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
