import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/variables.css';
import './styles/global.css';

// Components
import NavBar from './components/navigation/NavBar.jsx';
import Footer from './components/navigation/Footer.jsx';

// Pages
import Home from './pages/Home';
import FreshmanYear from './pages/freshman/FreshmanYear';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freshman" element={<FreshmanYear />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;