import React from "react";
import Header from "./components/common/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
}

export default App;