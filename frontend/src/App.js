import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FirstPage from "./pages/FirstPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/common/Header2";
import MyPage from "./pages/MyPage";
import AuthRouter from "./auth/AuthRouter";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<AuthRouter authAble={false} />}>
          <Route path="/" element={<FirstPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
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
