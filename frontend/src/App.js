import React from 'react';
import FirstPage from './component/FirstPage';
import LLLPage from './component/LLLPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App(){
    return(
      <React.Fragment>
          <Router>
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/LLLPage" element={<LLLPage/>}/>
            </Routes>
          </Router>
        </React.Fragment>
  );
}
