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
import SophomoreYear from './pages/sophomore/SophomoreYear';
import JuniorYear from './pages/junior/JuniorYear';
import SeniorYear from './pages/senior/SeniorYear';
import OuttaHereYear from './pages/outta-here/OuttaHereYear';

// then inside Routes:


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freshman" element={<FreshmanYear />} />
          <Route path="/sophomore" element={<SophomoreYear />} />
          <Route path="/junior" element={<JuniorYear />} />
          <Route path="/senior" element={<SeniorYear />} />
          <Route path="/outta-here" element={<OuttaHereYear />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;