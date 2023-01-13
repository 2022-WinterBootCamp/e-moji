import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./components/common/Header";

import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import Uploadpage from "./pages/UploadPage";
import LoadingPage from "./pages/LoadingPage";
import ResultPage from "./pages/ResultPage";

function App() {
    return(
        <React.Fragment>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/my-page" element={<MyPage/>}/>
                <Route path="/upload" element={<Uploadpage/>}/>
                <Route path="/loading" element={<LoadingPage/>}/>
                <Route path="/result" element={<ResultPage/>}/>
            </Routes>
        </React.Fragment>
    );
}

export default App;