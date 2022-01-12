import React, { Component } from 'react';
import Navbar from '../element/navbar';

class Search extends Component
{
    render () {
        return (
            <div className="container">
                <Navbar />
                <div id="cover">
                    <form method="get" action="">
                        <div className="tb">
                        <div className="td"><input type="text" placeholder="Search" required /></div>
                        <div className="td" id="s-cover">
                            <button type="submit">
                            <div id="s-circle"></div>
                            <span></span>
                            </button>
                        </div>
                        </div>
                    </form>
                    </div><div id="cover">
                    <form method="get" action="">
                        <div className="tb">
                        <div className="td"><input type="text" placeholder="Search" required /></div>
                        <div className="td" id="s-cover">
                            <button type="submit">
                            <div id="s-circle"></div>
                            <span></span>
                            </button>
                        </div>
                        </div>
                    </form>
                    </div>
            </div>
        );
    }
}

export default Search;