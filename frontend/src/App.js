import React from "react";
import Header from "./components/common/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstPage from './component/FirstPage';
import LoginPage from './component/LoginPage';
import SignupPage from './component/SignupPage';
import MyPage from "./pages/MyPage";
import RankDrawer from "./components/main/RankDrawer";

function App() {
    return(
        <React.Fragment>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<FirstPage/>}/>
                    <Route path="/loginpage" element={<LoginPage/>}/>
                    <Route path="/signuppage" element={<SignupPage/>}/>
                    <Route path="/mainpage" element={<RankDrawer />} />
                    <Route path="/MyPage" element={<MyPage/>}/>
              </Routes>     
            </Router>
        </React.Fragment>
    );
}

export default App;