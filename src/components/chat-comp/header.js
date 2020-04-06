import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

const Header = ()=>{
    return(
        <div className='header'>
            <h1>ChatApp</h1>
            <button><Link to='/'>Log Out</Link></button>
        </div>
    );
}

export default Header;