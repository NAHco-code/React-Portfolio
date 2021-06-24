import './App.css';
import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='header-img' alt=''></div>
      <div className='header-img-mirror' alt=''></div>

      <Home />
      <div className='' alt='' src='./images/cloud-fade-white.JPG'></div>

      <About />
      <div className='' alt='' src='./images/cloud-fade-white.JPG'></div>

      <Portfolio />
      <div className='' alt='' src='./images/cloud-fade-white.JPG'></div>

      <Contact />
      <div className='footer-img' alt=''></div>
    </div>
  );
}

export default App;
