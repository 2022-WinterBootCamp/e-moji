import React from "react";
import Header from "./components/common/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import Uploadpage from "./pages/UploadPage";
import LoadingPage from "./pages/LoadingPage";
import ResultPage from "./pages/ResultPage";

function App() {
    return(
        <React.Fragment>
            <Header />
            <Router>
              <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/my-page" element={<MyPage/>}/>
                  <Route path="/upload" element={<Uploadpage/>}/>
                  <Route path="/loading" element={<LoadingPage/>}/>
                  <Route path="/result" element={<ResultPage/>}/>
              </Routes>     
            </Router>
        </React.Fragment>
    );
}

export default App;