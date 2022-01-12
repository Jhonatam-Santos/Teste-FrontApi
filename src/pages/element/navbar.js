import React, { Component } from 'react';

class Nav extends Component
{
    render () {
        return (
            <div className="NavContainer">
                <div className="nav">
                    <input type="checkbox" id="nav-check" />
                    
                    <div className="nav-links">
                        <a href="#">Create Dev</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;