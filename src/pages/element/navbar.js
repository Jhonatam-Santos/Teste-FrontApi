import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <div className="NavContainer">
            <div className="nav">
                
                <div className="nav-links">
                    <Link to="/addDev">Adicionar Dev</Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;