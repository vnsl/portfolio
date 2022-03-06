import React from 'react';
import './index.scss';

import Header from '../../components/Header';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Portfolio from '../../pages/Portfolio';
import Contact from '../../pages/Contact';
import Footer from '../../components/Footer';

function Main() {
  return (
    <div className='Main'>
        <Header/>
        <Home id="Home"/>
        <About id="About"/>
        <Portfolio id="Portfolio"/>
        <Contact id="Contact"/>
        <Footer/>
    </div>
  );
}

export default Main;