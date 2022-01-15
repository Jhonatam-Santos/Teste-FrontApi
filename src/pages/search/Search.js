import React from 'react';
import Navbar from '../element/Navbar';

const Search = () => {
    return (
        <div className="container">
            <Navbar />
            <div id="cover">
                <form method="get" action="">
                    <div className="tb">
                    <div className="td"><input type="text" placeholder="" required /></div>
                    <div className="td" id="s-cover">
                        <button type="submit">
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
    )
};

export default Search;