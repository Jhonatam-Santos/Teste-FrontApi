import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './pages/search/Search';
import AddDev from './pages/addDev/AddDev';
import AddRepo from './pages/addRepo/AddRepo';
import Profile from './pages/profile/Profile';
import UpdateRepo from './pages/updateRepo/UpdateRepo';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Search /> } />
        <Route exact path="/addDev" element={ <AddDev /> } />
        <Route exact path="/profile/:id" element={ <Profile /> } />
        <Route exact path="/addRepo/:id" element={ <AddRepo /> } />
        <Route exact path="/updateRepo/:repo_id/:id" element={ <UpdateRepo /> } />
      </Routes>
    </Router>
  );
}

export default App;
