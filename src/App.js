import './App.css';
import './background-img.css';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (

    <Router
      basename='/'
    >
      <div className='App'>
      <Nav />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      </div>
    </Router>
  );
}

export default App;


{/*

  <Router
  basename='/'
  >

  <Switch>
    <Route path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/portfolio' component={Portfolio} />
    <Route path='/contact' component={Contact} />
  </Switch>

</Router>*/}




// <div className='header-img' alt=''></div>
// <div className='header-img-mirror' alt=''></div>;
//<div className='fade-to-about' alt=''></div>
//<div className='fade-to-portfolio' alt=''></div>
//<div className='fade-to-contact' alt=''></div>
