import './App.css';
import React from 'react';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import NotFoundPage from './components/NotFoundPage';
import NetflixShow from './components/NetflixShow';
import {Routes, Route} from 'react-router-dom';



function App() {


  return (
    <>
    <Routes>
        <Route path ="/netflix-clone" element={<LandingPage />} />
        <Route path ="/netflix-clone/signin" element={<SignIn />} />
        <Route path ="/netflix-clone/signout" element={<SignUp />} />
        <Route path ="/netflix-clone/netflixshow" element={<NetflixShow />} />
        <Route path ="/netflix-clone/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
