import './App.css';
import React from 'react';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import NotFoundPage from './components/NotFoundPage';
import NetflixShow from './components/NetflixShow';
import {HashRouter, Routes, Route} from 'react-router-dom';



function App() {


  return (
    <>
    <HashRouter basement={'/netflix-clone'}>
    <Routes>
        <Route path ="/netflix-clone" element={<LandingPage />} />
        <Route path ="/signin" element={<SignIn />} />
        <Route path ="/signout" element={<SignUp />} />
        <Route path ="/netflixshow" element={<NetflixShow />} />
        <Route path ="/*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;