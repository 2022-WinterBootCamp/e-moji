import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import RankDrawer from "./components/main/RankDrawer";
import FirstPage from "./pages/FirstPage";
import Register from "./pages/Register";
import MyPage from "./pages/MyPage";

import ExamplePage from "./pages/ExamplePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mainpage" element={<RankDrawer />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
