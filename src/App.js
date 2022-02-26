import './App.css';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
        <Header/>
        <Home/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
