import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

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
