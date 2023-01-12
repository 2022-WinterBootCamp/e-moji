import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./components/common/Header";

import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";

function App() {
    return(
        <React.Fragment>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/my-page" element={<MyPage/>}/>
            </Routes>
        </React.Fragment>
    );
}

export default App;