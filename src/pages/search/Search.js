import React, { useEffect, useState } from 'react';
import Navbar from '../element/Navbar';
import { Link } from 'react-router-dom';
import api from '../../services/api';

const Search = () => {
    const [users, setUser] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    
    useEffect(async () => {
        const response = await api.get('Dev');
        const {data} = response;
        setUser(data);
    }, [])

    function handleSearch(e) {
        const filteredUsers = users.filter(user => user.name.includes(e.target.value)&& e.target.value != '');
        setFilteredUsers(filteredUsers);
    }

    return (
        <div className="container">
            <Navbar />
            <input onChange={(e) => handleSearch(e)} type="text" />
            <div className="users">
                {filteredUsers.map((user) => (
                    <p><Link to="/">{user.name}</Link></p>
                    
                ))}
            </div>
        </div>
    )
};

export default Search;