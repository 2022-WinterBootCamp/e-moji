import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import AuthRouter from "./auth/AuthRouter";
import Register from "./pages/Register";
import FirstExample from "./pages/FirstExample";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<AuthRouter authAble={false} />}>
          <Route path="/" element={<FirstExample />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<AuthRouter authAble={true} />}>
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
