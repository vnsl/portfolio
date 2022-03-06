import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Main from './pages/Main';
import CV from './pages/CV';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Main/>}/>
        <Route path="/CV" element={<CV/>}/>
      </Routes>
    </Router>
  )
}

export default App;
