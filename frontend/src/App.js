import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header2";
import RankDrawer from "./components/main/RankDrawer";
import FirstPage from "./pages/FirstPage";
import Register from "./pages/Register";
import MyPage from "./pages/MyPage";
import AuthRouter from "./auth/AuthRouter";

import ExamplePage from "./pages/ExamplePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Routes>
          <Route element={<AuthRouter authAble={false} />}>
            <Route path="/" element={<FirstPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route element={<AuthRouter authAble={false} />}>
            <Route path="/mainpage" element={<RankDrawer />} />
            <Route path="/mypage" element={<MyPage />} />
          </Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
