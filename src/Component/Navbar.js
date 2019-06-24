import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">SHOP-NOW</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shoes</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;