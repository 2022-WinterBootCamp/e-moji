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
                  <Route path="/main" element={<RankDrawer />} />
                  <Route path="/mypage" element={<MyPage/>}/>
              </Routes>     
            </Router>
        </React.Fragment>
    );
                <Route path="/LoginPage" element={<LoginPage/>}/>
                <Route path="/SignupPage" element={<SignupPage/>}/>
}

export default App;