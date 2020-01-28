import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png'

function Header (props){
    return(
        <div>
            <header>
                <div className='logo-container'>
                    <img id='logo' src={logo} alt='logo'/>
                    <div id='logo-text'>SHELFIE</div>
                </div>
                <div className='nav-links'>
                    <Link to='/'><button class='nav-btn'>Dashboard</button></Link>
                    <Link to='/add'><button class='nav-btn'>Add Inventory</button></Link>
                </div>

            </header>
        </div>
    )
}

export default Header