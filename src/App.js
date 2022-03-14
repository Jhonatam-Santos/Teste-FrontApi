import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './pages/search/Search';
import AddDev from './pages/addDev/AddDev';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Search /> } />
        <Route exact path="/addDev" element={ <AddDev /> } />
        <Route exact path="/profile/:id" element={ <Profile /> } />
      </Routes>
    </Router>
  );
}

export default App;
