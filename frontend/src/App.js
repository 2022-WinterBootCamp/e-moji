import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import RankDrawer from "./components/main/RankDrawer";
import FirstPage from "./pages/FirstPage";
import SignupPage from "./pages/SignupPage";
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
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/Signuppage" element={<SignupPage />} />
          <Route path="/mainpage" element={<RankDrawer />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
