import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './pages/search/Search';
import './pages/search/Search.css';
import './pages/element/navbar.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Search /> } />
      </Routes>
    </Router>
  );
}

export default App;
