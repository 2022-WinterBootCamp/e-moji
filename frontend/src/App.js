import React from 'react';
import FirstPage from './component/FirstPage';
import LoginPage from './component/LoginPage';
import SignupPage from './component/SignupPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




export default function App(){
    return(
      <React.Fragment>
          <Router>
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/LoginPage" element={<LoginPage/>}/>
                <Route path="/SignupPage" element={<SignupPage/>}/>
            </Routes>
          </Router>
        </React.Fragment>
  );
}
