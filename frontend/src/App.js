import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import MyPage from "./pages/my-page/MyPage";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-page" element={<MyPage />} />
      </Routes>
    </React.Fragment>
  )
}

export default App;
