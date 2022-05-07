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
    <Routes basename="/netflix-clone">
        <Route path ="/*" element={<LandingPage />} />
        <Route path ="/signin" element={<SignIn />} />
        <Route path ="/signout" element={<SignUp />} /> 
        <Route path ="/netflixshow" element={<NetflixShow />} />
        {/* <Route path ="/*" element={<NotFoundPage />} />  */}
      </Routes>
    </>
  );
}

export default App;
