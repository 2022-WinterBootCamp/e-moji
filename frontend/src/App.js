import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import RankDrawer from "./components/main/RankDrawer";
import FirstPage from './pages/FirstPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MyPage from "./pages/MyPage";

import ExamplePage from './pages/ExamplePage';
import Login from './pages/Login';

function App() {
    return(
        <React.Fragment>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<FirstPage/>}/>
                    <Route path="/Loginpage" element={<LoginPage/>}/>
                    <Route path="/Signuppage" element={<SignupPage/>}/>
                    <Route path="/mainpage" element={<RankDrawer />} />
                    <Route path="/mypage" element={<MyPage/>}/>
              </Routes>     
            </Router>
        </React.Fragment>
    );
}

export default App;