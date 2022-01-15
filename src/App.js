import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './pages/search/Search';
import AddDev from './pages/addDev/AddDev';
import './pages/addDev/AddDev.css';
import './pages/search/Search.css';
import './pages/element/Navbar.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Search /> } />
        <Route path="/addDev" element={ <AddDev /> } />
      </Routes>
    </Router>
  );
}

export default App;
