import React from 'react';
import {Link} from 'react-router-dom'

function Header (props){
    return(
        <div>
            <header>
                <div>
                    SHELFIE
                </div>
                <div className='nav-links'>
                    <Link to='/'>Dashboard</Link>
                    <Link to='/add'>Add Inventory</Link>
                </div>

            </header>
        </div>
    )
}

export default Header