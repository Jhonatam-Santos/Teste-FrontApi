import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <div className="NavContainer">
            <div className="nav">
                <input type="checkbox" id="nav-check" />
                
                <div className="nav-links">
                    <Link to="/addDev">Adicionar Developer</Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;