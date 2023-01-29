import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RankDrawer from "./pages/MainPage";
import FirstPage from './pages/FirstPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Header from "./components/common/Header2";
import MyPage from "./pages/MyPage";
import AuthRouter from "./auth/AuthRouter";
import Register from "./pages/Register";

import ExamplePage from "./pages/ExamplePage";

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
          <Route path="/mainpage" element={<RankDrawer />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
